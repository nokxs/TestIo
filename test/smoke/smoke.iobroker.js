/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable quotes */

log("test", "warn");
exec("dummy");
on("test", () => {});
subscribe("test", () => {});
getSubscriptions();
schedule("* * * * *", () => {});
clearSchedule();
getAttr({ attr1: true }, "attr1");
getAstroDate("sunriseEnd");
isAstroDay();
compareTime('sunsetStart', 'sunsetEnd', 'between');
setState("test", true);
setBinaryState("test", 0x123);
setStateDelayed("test", false, 1000);
clearStateDelayed("test");
getStateDelayed("test");
getState("id");
getBinaryState("id", (err, data) => {});
getObject("test", "rooms");
setObject("test");
extendObject("test", { new: { obj: true } });
deleteObject("test", true);
getIdByName("test");
getEnums("test");
createState("test", true);
deleteState("test");
sendTo("adapter");
sendToHost("host", "command");
setInterval(() => {}, 1000);
clearInterval("id");
setTimeout(() => {}, 1000);
clearTimeout("id");
formatDate(new Date(), "YYYY-MM-DD");
getDateObject("20:00");
formatValue(",.", 123.456);
adapterSubscribe("test");
adapterUnsubscribe("test");
readFile("adapter", "file", (err, bytes) => {});
writeFile("adapter", "file");
delFile("adapter", "filename", (err) => {});
onStop(() => {});
getHistory("instance", {});
runScript("scriptName");
startScript("scriptName", true, () => {});
stopScript("scriptName", () => {});
isScriptActive("scriptName");
name;
instance;
messageTo({ instance: 'instance', script: 'script.js.common.scriptName', message: 'messageName' }, {}, { timeout: 1000 }, (result) => {});
onMessage("message", (data, cb) => {});
onMessageUnregister("message", (data, cb) => {});
onLog("error", (data) => {});
onLogUnregister("id");
