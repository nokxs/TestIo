import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class GetStateDelayed extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).getStateDelayed = function(id: string): any {
      return fakeCopy(id);
    };
  }
}