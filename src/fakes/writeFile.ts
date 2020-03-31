import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class WriteFile extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).writeFile = function(adapter: string, fileName: string, bytes: any, callback: (error: string) => {}): void {
      fakeCopy(adapter, fileName, bytes, callback);
    };
  }
}