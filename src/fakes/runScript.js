const sinon = require("sinon");

const fake = sinon.stub();

function runScript(scriptName) {
  fake(scriptName);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.runScript = runScript;
