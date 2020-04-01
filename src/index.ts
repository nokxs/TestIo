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
import { Name } from "./fakes/name";
import { On } from "./fakes/on";
import { OnLog } from "./fakes/onLog";
import { OnLogUnregister } from "./fakes/onLogUnregister";
import { OnMessage } from "./fakes/onMessage";
import { OnMessageUnregister } from "./fakes/onMessageUnregister";
import { OnStop } from "./fakes/onStop";
import { ReadFile } from "./fakes/readFile";
import { RunScript } from "./fakes/runScript";
import { Schedule } from "./fakes/schedule";
import { SendTo } from "./fakes/sendTo";
import { SendToHost } from "./fakes/sendToHost";
import { SetBinaryState } from "./fakes/setBinaryState";
import { SetInterval } from "./fakes/setInterval";
import { SetObject } from "./fakes/setObject";
import { SetState } from "./fakes/setState";
import { SetStateDelayed } from "./fakes/setStateDelayed";
import { SetTimeout } from "./fakes/setTimeout";
import { StartScript } from "./fakes/startScript";
import { StopScript } from "./fakes/stopScript";
import { Subscribe } from "./fakes/subscribe";
import { Unsubscribe } from "./fakes/unsubscribe";
import { WriteFile } from "./fakes/writeFile";

// todo: create type for mocks
export const fakes: any = {
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
  name: new Name(),
  on: new On(),
  onLog: new OnLog(),
  onLogUnregister: new OnLogUnregister(),
  onMessage: new OnMessage(),
  onMessageUnregister: new OnMessageUnregister(),
  onStop: new OnStop(),
  readFile: new ReadFile(),
  runScript: new RunScript(),
  schedule: new Schedule(),
  sendTo: new SendTo(),
  sendToHost: new SendToHost(),
  setBinaryState: new SetBinaryState(),
  setInterval: new SetInterval(),
  setObject: new SetObject(),
  setState: new SetState(),
  setStateDelayed: new SetStateDelayed(),
  setTimeout: new SetTimeout(),
  startScript: new StartScript(),
  stopScript: new StopScript(),
  subscribe: new Subscribe(),
  unsubscribe: new Unsubscribe(),
  writeFile: new WriteFile(),
};

export function check(scriptPath: string, testFunction: () => void): void {
  let requirePath: string = __dirname.includes("node_modules") ? `../../${scriptPath}` : scriptPath;

  try {
    require(requirePath);
    testFunction();
  } finally {
    const scriptName: string = require.resolve(requirePath);
    delete require.cache[scriptName];

    Object.values(fakes).forEach((fake: any) => {
      if (typeof fake.resetHistory === "function") {
        fake.resetHistory();
      }
    });
  }
}

(<any>global).check = check;