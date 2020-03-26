const sinon = require("sinon");

const fake = sinon.stub();

function getIdByName(name, alwaysArray) {
  return fake(name, alwaysArray);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.getIdByName = getIdByName;
