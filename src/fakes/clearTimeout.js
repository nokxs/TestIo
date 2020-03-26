const sinon = require("sinon");

const fake = sinon.stub();

function clearTimeout(id) {
  fake(id);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.clearTimeout = clearTimeout;
