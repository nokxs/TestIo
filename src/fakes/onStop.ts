import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class OnStop extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).onStop = function(callback: (callback: () => {}) => {}, timeout: number): void {
      fakeCopy(callback, timeout);
    };
  }
}