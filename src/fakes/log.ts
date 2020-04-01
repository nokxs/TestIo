import { IobrokerFakeBase } from "./common/IobrokerFakeBase";
import { LogSeverity } from "./common/LogSeverity";

export class Log extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).log = function(msg: string, sev: LogSeverity): void {
      fakeCopy(msg, sev);
    };
  }
}

