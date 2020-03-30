import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class Instance extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).instance = fakeCopy;
  }
}