// To read CSV
const fs = require('fs'); // file system module
const path = require('path');
const filePath = path.join(__dirname, '../public/log.csv');

// Mantengo registro de la úlima línea del log
let lastLog = '';

// Ultima línea del CSV
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) throw err;
    const lines = data.trim().split('\n');
    const lastLine = lines.slice(-1)[0];
    lastLog = lastLine;
    console.log("Last line of file: ",lastLine);
});

function getLastLog(){
    return lastLog;
}

module.exports = {
    getLastLog: getLastLog
}