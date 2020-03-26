const sinon = require("sinon");

const fake = sinon.stub();

function sendToHost(hostName, command, message, callback) {
  fake(hostName, command, message, callback);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.sendToHost = sendToHost;
