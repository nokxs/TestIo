import adapterSubscribe = require("./fakes/adapterSubscribe");
import adapterUnsubscribe = require("./fakes/adapterUnsubscribe");
import clearInterval = require("./fakes/clearInterval");
import clearStateDelayed = require("./fakes/clearStateDelayed");
import clearTimeout = require("./fakes/clearTimeout");
import compareTime = require("./fakes/compareTime");
import createState = require("./fakes/createState");
import deleteObject = require("./fakes/deleteObject");
import deleteState = require("./fakes/deleteState");
import delFile = require("./fakes/delFile");
import exec = require("./fakes/exec");
import extendObject = require("./fakes/extendObject");
import formatDate = require("./fakes/formatDate");
import formatValue = require("./fakes/formatValue");
import clearSchedule = require("./fakes/clearSchedule");
import getAttr = require("./fakes/getAttr");
import getAstroDate = require("./fakes/getAstroDate");
import getBinaryState = require("./fakes/getBinaryState");
import getDateObject = require("./fakes/getDateObject");
import getEnums = require("./fakes/getEnums");
import getHistory = require("./fakes/getHistory");
import getIdByName = require("./fakes/getIdByName");
import getObject = require("./fakes/getObject");
import getState = require("./fakes/getState");
import getStateDelayed = require("./fakes/getStateDelayed");
import getSubscriptions = require("./fakes/getSubscriptions");
import instance = require("./fakes/instance");
import isAstroDay = require("./fakes/isAstroDay");
import isScriptActive = require("./fakes/isScriptActive");
import log = require("./fakes/log.js");
import messageTo = require("./fakes/messageTo");
import name = require("./fakes/name");
import on = require("./fakes/on.js");
import onLog = require("./fakes/onLog");
import onLogUnregister = require("./fakes/onLogUnregister");
import onMessage = require("./fakes/onMessage");
import onMessageUnregister = require("./fakes/onMessageUnregister");
import onStop = require("./fakes/onStop");
import readFile = require("./fakes/readFile");
import runScript = require("./fakes/runScript");
import schedule = require("./fakes/schedule");
import sendTo = require("./fakes/sendTo");
import sendToHost = require("./fakes/sendToHost");
import setBinaryState = require("./fakes/setBinaryState");
import setInterval = require("./fakes/setInterval");
import setObject = require("./fakes/setObject");
import setState = require("./fakes/setState.js");
import setStateDelayed = require("./fakes/setStateDelayed");
import setTimeout = require("./fakes/setTimeout");
import startScript = require("./fakes/startScript");
import stopScript = require("./fakes/stopScript");
import subscribe = require("./fakes/subscribe");
import unsubscribe = require("./fakes/unsubscribe");
import writeFile = require("./fakes/writeFile");

// tslint:disable-next-line: typedef
export const apiMethods = {
  adapterSubscribe,
  adapterUnsubscribe,
  clearInterval,
  clearStateDelayed,
  clearTimeout,
  compareTime,
  createState,
  deleteObject,
  deleteState,
  delFile,
  exec,
  extendObject,
  formatDate,
  formatValue,
  clearSchedule,
  getAttr,
  getAstroDate,
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

export {};

declare global {
  function check(scriptPath: string, testFunction: () => void): void;
}

// tslint:disable-next-line: typedef
const _global = global as any;

export function check(scriptPath: string, testFunction: () => void): void {
  const requirePath: string = __dirname.includes("node_modules") ? `../../${scriptPath}` : scriptPath;

  try {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    require(requirePath);
    testFunction();
  } finally {
    const scriptName: string = require.resolve(requirePath);
    delete require.cache[scriptName];

    Object.values(apiMethods).forEach((fake) => {
      if (typeof fake.resetHistory === "function") {
        fake.resetHistory();
      }
    });
  }
}

_global.check = check;
