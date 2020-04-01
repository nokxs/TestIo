import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class StartScript extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).startScript = function(scriptName: string, ignoreIfStarted: boolean, callback: () => {}): void {
      fakeCopy(scriptName, ignoreIfStarted, callback);
    };
  }
}