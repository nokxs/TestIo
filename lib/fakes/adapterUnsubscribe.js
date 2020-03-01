const sinon = require("sinon");

const fake = sinon.stub();

function adapterUnsubscribe(id) {
  fake(id);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.adapterUnsubscribe = adapterUnsubscribe;
