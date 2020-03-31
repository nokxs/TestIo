import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class ReadFile extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).readFile = function(adapter: string, fileName: string, callback: (error: any, data: any) => {}): void {
      fakeCopy(adapter, fileName, callback);
    };
  }
}