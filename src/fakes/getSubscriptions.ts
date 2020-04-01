import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class GetSubscriptions extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).getSubscriptions = function(): any {
      return fakeCopy();
    };
  }
}