import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class ClearTimeout extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).clearTimeout = function clearTimeout(id: string): void {
      fakeCopy(id);
    };
  }
}