const sinon = require("sinon");

const fake = sinon.fake();

function createState(name, initialValue, forceCreation, common, native, callback) {
  if (name == null) {
    throw new Error("createState: name has to be defined");
  }

  if (forceCreation && typeof forceCreation === "function") {
    forceCreation();
  }

  if (callback && typeof callback === "function") {
    forceCreation();
  }

  fake(name, initialValue, forceCreation, common, native, callback);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.createState = createState;
