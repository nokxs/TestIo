const onFake = require("./on");

module.exports.fake = onFake.fake;
module.exports.trigger = onFake.trigger;
module.exports.resetHistory = onFake.resetHistory;

global.subscribe = on;
