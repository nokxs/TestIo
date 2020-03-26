const sinon = require("sinon");

const fake = sinon.stub();

function getDateObject(stringOrNumber) {
  return fake(stringOrNumber);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.getDateObject = getDateObject;
