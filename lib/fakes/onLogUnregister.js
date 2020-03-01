const sinon = require("sinon");

const fake = sinon.stub();

function onLogUnregister(unsub) {
  fake(unsub);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.onLogUnregister = onLogUnregister;
