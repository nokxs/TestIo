const on = require("./on");

module.exports.fake = on.fake;
module.exports.trigger = on.trigger;
module.exports.resetHistory = on.resetHistory;

global.subscribe = on;
