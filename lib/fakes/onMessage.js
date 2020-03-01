const sinon = require("sinon");

const fake = sinon.stub();

function onMessage(messageName, data) {
  fake(messageName, data);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.onMessage = onMessage;
