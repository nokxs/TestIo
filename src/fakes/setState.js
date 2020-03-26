const sinon = require("sinon");

const fake = sinon.fake();

function setState(id, state, ack, callback) {
  if (id == null) {
    throw new Error("setState: id has to be defined");
  }

  if (state == null) {
    throw new Error(`setState: state has to be defined for id '${id}'`);
  }

  fake(id, state, ack, callback);
}

function resetHistory() {
  fake.resetHistory();
}

function getState(id) {
  const call = fake.getCalls().reverse().find((c) => c.args[0] === id);

  if (call) {
    return call.args[1];
  }

  return null;
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;
module.exports.getLastSetState = getState;

global.setState = setState;
