import { AdapterSubscribe } from "./fakes/adapterSubscribe";
import { AdapterUnsubscribe } from "./fakes/adapterUnsubscribe";
import { ClearInterval } from "./fakes/clearInterval";
import { ClearSchedule } from "./fakes/clearSchedule";
import { ClearStateDelayed } from "./fakes/clearStateDelayed";
import { ClearTimeout } from "./fakes/clearTimeout";
import { CompareTime } from "./fakes/compareTime";
import { CreateState } from "./fakes/createState";
import { DeleteObject } from "./fakes/deleteObject";
import { DeleteState } from "./fakes/deleteState";
import { DelFile } from "./fakes/delFile";
import { Exec } from "./fakes/exec";
import { ExtendObject } from "./fakes/extendObject";
import { FormatDate } from "./fakes/formatDate";
import { FormatValue } from "./fakes/formatValue";
import { GetAttr } from "./fakes/getAttr";
import { GetAstroDate } from "./fakes/getAstroDate";
import { GetBinaryState } from "./fakes/getBinaryState";
import { GetDateObject } from "./fakes/getDateObject";
import { GetEnums } from "./fakes/getEnums";
import { GetHistory } from "./fakes/getHistory";
import { GetIdByName } from "./fakes/getIdByName";
import { GetObject } from "./fakes/getObject";
import { GetState } from "./fakes/getState";

import { GetStateDelayed } from "./fakes/getStateDelayed";
import { GetSubscriptions } from "./fakes/getSubscriptions";
import { Instance } from "./fakes/instance";
import { IsAstroDay } from "./fakes/isAstroDay";
import { IsScriptActive } from "./fakes/isScriptActive";
import { Log } from "./fakes/log";
import { MessageTo } from "./fakes/messageTo";
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
import { SetState } from "./fakes/setState";
import setStateDelayed = require("./fakes/setStateDelayed");
import setTimeout = require("./fakes/setTimeout");
import startScript = require("./fakes/startScript");
import stopScript = require("./fakes/stopScript");
import subscribe = require("./fakes/subscribe");
import unsubscribe = require("./fakes/unsubscribe");
import writeFile = require("./fakes/writeFile");

// todo: create type for mocks
export const mocks: any = {
  adapterSubscribe: new AdapterSubscribe(),
  adapterUnsubscribe: new AdapterUnsubscribe(),
  clearInterval: new ClearInterval(),
  clearSchedule: new ClearSchedule(),
  clearStateDelayed: new ClearStateDelayed(),
  clearTimeout: new ClearTimeout(),
  compareTime: new CompareTime(),
  createState: new CreateState(),
  deleteObject: new DeleteObject(),
  deleteState: new DeleteState(),
  delFile: new DelFile(),
  exec: new Exec(),
  extendObject: new ExtendObject(),
  formatDate: new FormatDate(),
  formatValue: new FormatValue(),
  getAttr: new GetAttr(),
  getAstroDate: new GetAstroDate(),
  getBinaryState: new GetBinaryState(),
  getDateObject: new GetDateObject(),
  getEnums: new GetEnums(),
  getHistory: new GetHistory(),
  getIdByName: new GetIdByName(),
  getObject: new GetObject(),
  getState: new GetState(),
  getStateDelayed: new GetStateDelayed(),
  getSubscriptions: new GetSubscriptions(),
  instance: new Instance(),
  isAstroDay: new IsAstroDay(),
  isScriptActive: new IsScriptActive(),
  log: new Log(),
  messageTo: new MessageTo(),
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
  setState: new SetState(),
  setStateDelayed,
  setTimeout,
  startScript,
  stopScript,
  subscribe,
  unsubscribe,
  writeFile,
};

export function check(scriptPath: string, testFunction: () => void): void {
  const requirePath: string = __dirname.includes("node_modules") ? `../../${scriptPath}` : scriptPath;

  try {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    require(requirePath);
    testFunction();
  } finally {
    const scriptName: string = require.resolve(requirePath);
    delete require.cache[scriptName];

    Object.values(mocks).forEach((fake: any) => {
      if (typeof fake.resetHistory === "function") {
        fake.resetHistory();
      }
    });
  }
}
