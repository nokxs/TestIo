import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class ClearStateDelayed extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).clearStateDelayed = function clearStateDelayed(id: string): void {
      fakeCopy(id);
    };
  }
}