import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class GetHistory extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).getHistory = function(instance: string, options: any, callback: (err: string, result: Array<string>) => {}): void {
      fakeCopy(instance, options, callback);
    };
  }
}