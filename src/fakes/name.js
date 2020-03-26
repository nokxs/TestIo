const sinon = require("sinon");

const fake = sinon.stub();

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.name = fake;
