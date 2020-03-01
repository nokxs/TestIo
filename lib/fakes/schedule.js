const sinon = require("sinon");

const fake = sinon.fake();
let repository = [];

function schedule(pattern, callback) {
  if (pattern == null) {
    throw new Error("schedule: pattern has to be defined");
  }

  if (callback == null) {
    throw new Error(`schedule: callback has to be defined for id '${pattern}'`);
  }

  fake(pattern, callback);

  repository.push({
    pattern,
    callback,
  });
}

function trigger(pattern) {
  const matches = repository.filter((e) => pattern.match(e.pattern) != null);

  if (matches.length === 0) {
    throw new Error(`Cannot trigger schedule for '${pattern}', because it is not registered`);
  }

  matches.forEach((match) => {
    match.callback();
  });
}

function resetHistory() {
  fake.resetHistory();
  repository = [];
}

module.exports.fake = fake;
module.exports.trigger = trigger;
module.exports.resetHistory = resetHistory;

global.schedule = schedule;
