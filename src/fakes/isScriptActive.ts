import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class IsScriptActive extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).isScriptActive = function(scriptName: string): void {
      return fakeCopy(scriptName);
    };
  }
}