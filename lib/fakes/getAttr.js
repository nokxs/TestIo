const sinon = require("sinon");

const fake = sinon.stub();

function getAttr(obj, path) {
  if (obj == null) {
    throw new Error("getAttr: obj has to be defined");
  }

  if (path == null) {
    throw new Error("getAttr: path has to be defined");
  }

  return fake(obj, path);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.getAttr = getAttr;
