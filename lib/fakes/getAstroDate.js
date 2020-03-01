const sinon = require("sinon");

const fake = sinon.stub();

function getAstroDate(pattern, date) {
  if (pattern == null) {
    throw new Error("getAttr: obj has to be defined");
  }

  return fake(pattern, date);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.getAstroDate = getAstroDate;
