import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class SetBinaryState extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).setBinaryState = function(id: string, state: any, callback: () => {}): void {
      fakeCopy(id, state, callback);
    };
  }
}