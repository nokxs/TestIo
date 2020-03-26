const sinon = require("sinon");

const fake = sinon.stub();

function getStateDelayed(id) {
  return fake(id);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.getStateDelayed = getStateDelayed;
