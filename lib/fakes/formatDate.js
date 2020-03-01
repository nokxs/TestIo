const sinon = require("sinon");

const fake = sinon.stub();

function formatDate(millisecondsOrDate, format) {
  fake(millisecondsOrDate, format);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.formatDate = formatDate;
