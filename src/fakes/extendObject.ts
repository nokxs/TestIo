import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class ExtendObject extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).extendObject = function(id: string, obj: any, callback: () => {}): void {
      fakeCopy(id, obj, callback);
    };
  }
}