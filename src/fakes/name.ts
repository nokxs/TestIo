import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class Name extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).name = fakeCopy();
  }
}