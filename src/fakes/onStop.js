const sinon = require("sinon");

const fake = sinon.stub();

function onStop(callback, timeout) {
  fake(callback, timeout);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.onStop = onStop;
