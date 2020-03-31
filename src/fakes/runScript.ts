import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class RunScript extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).runScript = function(scriptName: string): void {
      fakeCopy(scriptName);
    };
  }
}