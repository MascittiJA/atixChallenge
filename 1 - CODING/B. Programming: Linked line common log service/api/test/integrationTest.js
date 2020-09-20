const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../app');
const should = chai.should();
const assert = chai.assert;

const re = new RegExp('^00.*');

describe('Integration Test - GET /log', () => {
    it('Should return the last log entry, start with 00 and have a nonce number', done => {
      chai
        .request(app)
        .get('/log')
        .end((err, res) => {
            res.should.have.status(200);
            assert.isTrue(re.test(res.body.prevHash));
            assert.isNumber(Number(res.body.nonce));
            done();
        });
    });
});

describe('Integration Test - POST /log', () => {
    it('Should POST a message, start with 00, have a nonce number and log the message', done => {
        const message = `Test message ${Date.now()}`;
        chai
            .request(app)
            .post('/log')
            .send({ msg: message})
            .end((err, res) => {
                res.should.have.status(201);
                assert.isTrue(re.test(res.body.prevHash));
                assert.isNumber(Number(res.body.nonce));
                assert.deepEqual(res.body.message, message);
                done();
            });
    });
});