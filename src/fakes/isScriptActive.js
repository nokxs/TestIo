const sinon = require("sinon");

const fake = sinon.stub();

function isScriptActive(scriptName) {
  fake(scriptName);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.isScriptActive = isScriptActive;
