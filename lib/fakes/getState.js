const sinon = require("sinon");
const setState = require("./setState");

const fake = sinon.stub();

function getState(id) {
  if (!(id)) {
    throw new Error("getState: id has to be defined");
  }

  const state = setState.getLastSetState(id);

  if (state) {
    return { val: state };
  }

  return fake(id);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.getState = getState;
