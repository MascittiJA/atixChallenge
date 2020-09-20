
module.exports = {
    getLastLog: getLastLog,
    newMessage: newMessage,
}

const debug = require('debug')('api:DEBUG')

// To read CSV
const fs = require('fs'); // file system module
const path = require('path');
const readline = require('readline');
const Stream = require('stream');

const filePath = path.join(__dirname, '../public/log.csv');

// Mantengo registro de la úlima línea del log
let lastLog = '';

function getLastLog(){
    return lastLog;
}

// Leo la última línea evitando cargar en memoria todo el archivo
function getLastLine()  {
    const inStream = fs.createReadStream(filePath);
    const outStream = new Stream;
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface(inStream, outStream);

        let lastLine = '';
        rl.on('line', function (line) {
            if (line.length > 0) {
                lastLine = line;
            }
        });

        rl.on('error', reject)

        rl.on('close', function () {
            resolve(lastLine)
        });
    })
}

getLastLine()
    .then(lastLine => {
        lastLog = lastLine;
        debug("Last line of file: ",lastLine);
    })
    .catch(err => {
        debug(err);
    })


//To hash messagges
const crypto = require("crypto");
// Regex to check PoW
const re = new RegExp('^00.*');
// WriteStream para escribir nuevas líneas en el CSV
const writeStream = fs.createWriteStream(filePath, {flags:'a'});

// Manejando evento consiguo actualizar el CSV 
// concurrentemente sin entrar en race conditions.
const events = require('events');
const logEmitter = new events.EventEmitter();
const NEW_MESSAGE = 'NEW_MESSAGE';

logEmitter.on(NEW_MESSAGE, message => {
    const newLog = getNewLogLine(message);
    lastLog = newLog;
    writeStream.write(newLog + "\n");
})

function getNewLogLine(message) {
    const oldHash = crypto
                    .createHash('sha256')
                    .update(lastLog, 'utf-8')
                    .digest('hex')
                    .toString()
    debug("Old line: ", lastLog);
    debug("Old Hash: ", oldHash);
    
    let nonce = 0;
    let newHash = '';
    let newLog = '';
    do {
        newLog = `${oldHash},${message},${nonce}`;
        newHash = crypto
            .createHash('sha256')
            .update(newLog, 'utf-8')
            .digest('hex')
            .toString();
        nonce++;
    } while (!re.test(newHash));
    
    debug("New Log Entry: ", newLog)
    debug("New Hash: ", newHash);
 
    return newLog;
}

function newMessage(message) {
    logEmitter.emit(NEW_MESSAGE,message);
    return lastLog;
}