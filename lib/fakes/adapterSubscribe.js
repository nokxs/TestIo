const sinon = require("sinon");

const fake = sinon.stub();

function adapterSubscribe(id) {
  fake(id);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.adapterSubscribe = adapterSubscribe;
