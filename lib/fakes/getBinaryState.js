const sinon = require("sinon");

const fake = sinon.stub();

function getBinaryState(id, callback) {
  return fake(id, callback);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.getBinaryState = getBinaryState;
