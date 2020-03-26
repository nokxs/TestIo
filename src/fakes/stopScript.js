const sinon = require("sinon");

const fake = sinon.stub();

function stopScript(scriptName, callback) {
  fake(scriptName, callback);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.stopScript = stopScript;
