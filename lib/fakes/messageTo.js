const sinon = require("sinon");

const fake = sinon.stub();

function messageTo(recipent, data, options, callback) {
  fake(recipent, data, options, callback);
}

function resetHistory() {
  fake.resetHistory();
}

module.exports.fake = fake;
module.exports.resetHistory = resetHistory;

global.messageTo = messageTo;
