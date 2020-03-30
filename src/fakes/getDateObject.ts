import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class GetDateObject extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).getDateObject = function(stringOrNumber: string | number): void {
      fakeCopy(stringOrNumber);
    };
  }
}