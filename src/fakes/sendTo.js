const sinon = require("sinon");

const fake = sinon.fake();

function sendTo(adapter, command, message, callback) {
  fake(adapter, command, message, callback);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.sendTo = sendTo;
