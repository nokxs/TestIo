import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class DeleteState extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).deleteState = function (name: string, callback: () => {}): void {
      fakeCopy(name, callback);
    };
  }
}