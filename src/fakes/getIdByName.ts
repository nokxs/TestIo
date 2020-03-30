import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class GetIdByName extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).getIdByName = function(name: string, alwaysArray: boolean): void {
      fakeCopy(name, alwaysArray);
    };
  }
}