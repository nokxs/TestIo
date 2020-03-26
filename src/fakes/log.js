const sinon = require("sinon");

const fake = sinon.fake();

function log(msg, sev) {
  fake(msg, sev);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.log = log;
