const sinon = require("sinon");

const fake = sinon.stub();

function setBinaryState(id, state, callback) {
  fake(id, state, callback);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.setBinaryState = setBinaryState;
