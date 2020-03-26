const sinon = require("sinon");

const fake = sinon.stub();

function onLog(severity, callback) {
  fake(severity, callback);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.onLog = onLog;
