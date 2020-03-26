const sinon = require("sinon");

const fake = sinon.stub();

function delFile(adapter, fileName, callback) {
  fake(adapter, fileName, callback);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.delFile = delFile;
