const sinon = require("sinon");

const fake = sinon.fake();

function exec(cmd, callback) {
  fake(cmd, callback);

  if (callback) {
    callback(); // TODO parameters
  }
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.exec = exec;