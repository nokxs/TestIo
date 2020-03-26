const sinon = require("sinon");

const fake = sinon.stub();

function writeFile(adapter, fileName, bytes, callback) {
  fake(adapter, fileName, bytes, callback);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.writeFile = writeFile;
