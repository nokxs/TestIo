import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class DelFile extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).delFile = function(adapter: string, fileName: string, callback: () => {}): void {
      fakeCopy(adapter, fileName, callback);
    };
  }
}