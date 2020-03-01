const adapterSubscribe = require("./lib/fakes/adapterSubscribe");
const adapterUnsubscribe = require("./lib/fakes/adapterUnsubscribe");
const clearInterval = require("./lib/fakes/clearInterval");
const clearStateDelayed = require("./lib/fakes/clearStateDelayed");
const clearTimeout = require("./lib/fakes/clearTimeout");
const compareTime = require("./lib/fakes/compareTime");
const createState = require("./lib/fakes/createState");
const deleteState = require("./lib/fakes/deleteState");
const delFile = require("./lib/fakes/delFile");
const exec = require("./lib/fakes/exec");
const extendObject = require("./lib/fakes/extendObject");
const formatDate = require("./lib/fakes/formatDate");
const formatValue = require("./lib/fakes/formatValue");
const getAstroDate = require("./lib/fakes/getAstroDate");
const getAttr = require("./lib/fakes/getAttr");
const getBinaryState = require("./lib/fakes/getBinaryState");
const getDateObject = require("./lib/fakes/getDateObject");
const getEnums = require("./lib/fakes/getEnums");
const getHistory = require("./lib/fakes/getHistory");
const getIdByName = require("./lib/fakes/getIdByName");
const getObject = require("./lib/fakes/getObject");
const getState = require("./lib/fakes/getState");
const getStateDelayed = require("./lib/fakes/getStateDelayed");
const getSubscriptions = require("./lib/fakes/getSubscriptions");
const instance = require("./lib/fakes/instance");
const isAstroDay = require("./lib/fakes/isAstroDay");
const isScriptActive = require("./lib/fakes/isScriptActive");
const log = require("./lib/fakes/log.js");
const messageTo = require("./lib/fakes/messageTo");
const name = require("./lib/fakes/name");
const on = require("./lib/fakes/on.js");
const onLog = require("./lib/fakes/onLog");
const onLogUnregister = require("./lib/fakes/onLogUnregister");
const onMessage = require("./lib/fakes/onMessage");
const onMessageUnregister = require("./lib/fakes/onMessageUnregister");
const onStop = require("./lib/fakes/onStop");
const readFile = require("./lib/fakes/readFile");
const runScript = require("./lib/fakes/runScript");
const schedule = require("./lib/fakes/schedule");
const sendTo = require("./lib/fakes/sendTo");
const sendToHost = require("./lib/fakes/sendToHost");
const setBinaryState = require("./lib/fakes/setBinaryState");
const setInterval = require("./lib/fakes/setInterval");
const setObject = require("./lib/fakes/setObject");
const setState = require("./lib/fakes/setState.js");
const setStateDelayed = require("./lib/fakes/setStateDelayed");
const setTimeout = require("./lib/fakes/setTimeout");
const startScript = require("./lib/fakes/startScript");
const stopScript = require("./lib/fakes/stopScript");
const subscribe = require("./lib/fakes/subscribe");
const unsubscribe = require("./lib/fakes/unsubscribe");
const writeFile = require("./lib/fakes/writeFile");

const apiMethods = {
  adapterSubscribe,
  adapterUnsubscribe,
  clearInterval,
  clearStateDelayed,
  clearTimeout,
  compareTime,
  createState,
  deleteState,
  delFile,
  exec,
  extendObject,
  formatDate,
  formatValue,
  getAstroDate,
  getAttr,
  getBinaryState,
  getDateObject,
  getEnums,
  getHistory,
  getIdByName,
  getObject,
  getState,
  getStateDelayed,
  getSubscriptions,
  instance,
  isAstroDay,
  isScriptActive,
  log,
  messageTo,
  name,
  on,
  onLog,
  onLogUnregister,
  onMessage,
  onMessageUnregister,
  onStop,
  readFile,
  runScript,
  schedule,
  sendTo,
  sendToHost,
  setBinaryState,
  setInterval,
  setObject,
  setState,
  setStateDelayed,
  setTimeout,
  startScript,
  stopScript,
  subscribe,
  unsubscribe,
  writeFile,
};

function check(scriptPath, testFunction) {
  const requirePath = __dirname.includes("node_modules") ? `../../${scriptPath}` : scriptPath;

  try {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    require(requirePath);
    testFunction();
  } finally {
    const scriptName = require.resolve(requirePath);
    delete require.cache[scriptName];

    Object.values(apiMethods).forEach((fake) => {
      if (typeof fake.resetHistory === "function") {
        fake.resetHistory();
      }
    });
  }
}

module.exports = apiMethods;

global.check = check;
