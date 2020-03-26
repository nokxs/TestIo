const sinon = require("sinon");

const fake = sinon.stub();

function clearStateDelayed(id) {
  fake(id);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.clearStateDelayed = clearStateDelayed;
