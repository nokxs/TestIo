const sinon = require("sinon");

const fake = sinon.stub();

function unsubscribe(idOrHandler) {
  if (!(idOrHandler)) {
    throw new Error("unsubscribe: idOrHandler has to be defined");
  }

  fake(idOrHandler);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.unsubscribe = unsubscribe;
