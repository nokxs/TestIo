const sinon = require("sinon");

const fake = sinon.stub();

function getObject(id, enumName) {
  return fake(id, enumName);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.getObject = getObject;
