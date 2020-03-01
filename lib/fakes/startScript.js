const sinon = require("sinon");

const fake = sinon.stub();

function startScript(scriptName, ignoreIfStarted, callback) {
  fake(scriptName, ignoreIfStarted, callback);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.startScript = startScript;
