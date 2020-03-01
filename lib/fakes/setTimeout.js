const sinon = require("sinon");

const fake = sinon.stub();

function setTimeout(callback, ms, arg1, arg2, arg3, arg4) {
  fake(callback, ms, arg1, arg2, arg3, arg4);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.setTimeout = setTimeout;
