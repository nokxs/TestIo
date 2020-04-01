import { IobrokerFakeBase } from "./common/IobrokerFakeBase";
import { LogSeverity } from "./common/LogSeverity";

export class OnLogUnregister extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    // todo: replace any with correct object
    (<any>global).onLogUnregister = function(unsub: string | LogSeverity | any): void {
      fakeCopy(unsub);
    };
  }
}