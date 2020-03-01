const sinon = require("sinon");

const fake = sinon.stub();

function isAstroDay() {
  return fake();
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.isAstroDay = isAstroDay;
