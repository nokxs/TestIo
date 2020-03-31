import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class SetObject extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).setObject = function(id: string, obj: any, callback: (err: string) => {}): void {
      fakeCopy(id, obj, callback);
    };
  }
}