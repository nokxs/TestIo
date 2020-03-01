const sinon = require("sinon");

const fake = sinon.stub();

function setObject(id, obj, callback) {
  fake(id, obj, callback);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.setObject = setObject;
