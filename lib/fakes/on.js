const sinon = require("sinon");

const fake = sinon.fake();
let repository = [];

// function escapeRegExp(string) {
//   return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
// }

function on(pattern, callbackOrId, value) {
  fake(pattern, callbackOrId, value);
  repository.push({
    pattern,
    callbackOrId,
    value,
  });
}

function trigger(id, value) {
  const matches = repository.filter((e) => {
    if (typeof e.pattern === "string") {
      return e.pattern === id;
    }

    if (typeof e.pattern === "object") {
      if (typeof e.pattern.id !== "undefined") {
        return e.pattern.id === id;
      }

      // return id.match(new RegExp(e.pattern, "i")) != null; // TODO: support regex
    }

    return false;
  });

  if (matches.length === 0) {
    throw new Error(`Cannot trigger on for '${id}', because it is not registered`);
  }

  matches.forEach((match) => {
    const triggerValue = typeof value.state === "undefined" || typeof value.state.val === "undefined" ? { state: { val: value } } : value;
    match.callbackOrId(triggerValue);
  });
}

function resetHistory() {
  fake.resetHistory();
  repository = [];
}

module.exports.fake = fake;
module.exports.trigger = trigger;
module.exports.resetHistory = resetHistory;

global.on = on;
