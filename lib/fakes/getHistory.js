const sinon = require("sinon");

const fake = sinon.stub();

function getHistory(instance, options, callback) {
  return fake(instance, options, callback);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.getHistory = getHistory;
