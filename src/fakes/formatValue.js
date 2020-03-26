const sinon = require("sinon");

const fake = sinon.stub();

function formatValue(value, decimals, format) {
  fake(value, decimals, format);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.formatValue = formatValue;
