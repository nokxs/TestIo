const sinon = require("sinon");

const fake = sinon.stub();

function getSubscriptions() {
  return fake();
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.getSubscriptions = getSubscriptions;
