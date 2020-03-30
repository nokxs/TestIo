import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class IsAstroDay extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).isAstroDay = function(): void {
      return fakeCopy();
    };
  }
}