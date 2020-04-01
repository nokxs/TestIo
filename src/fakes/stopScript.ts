import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class StopScript extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).stopScript = function(scriptName: string, callback: () => {}): void {
      fakeCopy(scriptName, callback);
    };
  }
}