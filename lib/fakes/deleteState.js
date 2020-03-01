const sinon = require("sinon");

const fake = sinon.stub();

function deleteState(name, callback) {
  fake(name, callback);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.deleteState = deleteState;
