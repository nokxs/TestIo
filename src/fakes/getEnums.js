const sinon = require("sinon");

const fake = sinon.stub();

function getEnums(enumName) {
  return fake(enumName);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.getEnums = getEnums;
