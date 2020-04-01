import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class GetBinaryState extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).getBinaryState = function(id: string, callback: (err: string, data: any) => {}): void {
      fakeCopy(id, callback);
    };
  }
}