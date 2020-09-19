// To read CSV
const fs = require('fs'); // file system module
const path = require('path');
const filePath = path.join(__dirname, '../public/log.csv');

const readline = require('readline');
const Stream = require('stream');

// Mantengo registro de la úlima línea del log
let lastLog = '';

// Leo la última línea evitando cargar en memoria todo el archivo.
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
        console.log("Last line of file: ",lastLine);
    })
    .catch(err => {
        console.log(err);
    })

function getLastLog(){
    return lastLog;
}

module.exports = {
    getLastLog: getLastLog
}