const chai = require('chai');
const assert = chai.assert;

const re = new RegExp('^00.*');
const crypto = require("crypto");

const fs = require('fs'); // file system module
const path = require('path');
const filePath = path.join(__dirname, '../public/log.csv');

let lines = [];

// Load data
fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) throw err;
    const csv = data.trim().split('\n');
    lines = csv.slice();
});


describe('Unit Test - Verifying loaded data', () => {
    
    it('Every entry should have 3 values', done => {
        for (let entry of lines) {
            assert.lengthOf(entry.split(','), 3);
        }
        done();
    });

    it('Every entry have a nonce number', done => {
        for (let entry of lines) {
            assert.isNumber(Number(entry.split(',')[2]));
        }
        done();
    });
    
    it('Every entry star with 00', done => {
        for (let entry of lines) {
            const hash = crypto
                    .createHash('sha256')
                    .update(entry, 'utf-8')
                    .digest('hex')
                    .toString()
            assert.isTrue(re.test(hash));
        }
        done();
    });

    it('Every entry is linked', done => {
        for (let i=1; i< lines.length ; i++) {
            const prevHash = crypto
                    .createHash('sha256')
                    .update(lines[i-1], 'utf-8')
                    .digest('hex')
                    .toString()
            const linkedHash = lines[i].split(',')[0];
            assert.equal(prevHash, linkedHash);
        }
        done();
    });
});