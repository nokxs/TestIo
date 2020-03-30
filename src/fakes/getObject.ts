import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class GetObject extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).getObject = function(id: string, enumName: string): any {
      return fakeCopy(id, enumName);
    };
  }
}