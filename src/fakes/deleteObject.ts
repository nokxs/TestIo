import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class DeleteObject extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).deleteObject = function(id: string, isRecursive: boolean, callback: () => {}): void {
      fakeCopy(id, isRecursive, callback);
    };
  }
}