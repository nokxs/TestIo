import { IobrokerFakeBase } from "./common/IobrokerFakeBase";
import { LogSeverity } from "./common/LogSeverity";

export class OnLog extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).onLog = function(severity: LogSeverity, callback: (data: any) => { message: string }): void {
      fakeCopy(severity, callback);
    };
  }
}