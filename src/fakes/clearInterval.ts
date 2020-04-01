import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class ClearInterval extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).clearInterval = function clearInterval(id: string): void {
      fakeCopy(id);
    };
  }
}