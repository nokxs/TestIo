import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class GetEnums extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).getEnums = function(enumName: string): void {
      fakeCopy(enumName);
    };
  }
}