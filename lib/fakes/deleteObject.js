const sinon = require("sinon");

const fake = sinon.stub();

function deleteObject(id, isRecursive, callback) {
  fake(id, isRecursive, callback);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.deleteObject = deleteObject;
