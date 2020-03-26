const sinon = require("sinon");

const fake = sinon.stub();

function setStateDelayed(id, state, isAck, delay, clearRunning, callback) {
  fake(id, state, isAck, delay, clearRunning, callback);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.setStateDelayed = setStateDelayed;
