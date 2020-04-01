import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class MessageTo extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).messageTo = function(recipent: string | any, data: any, options: any, callback: (result: any) => {}): void {
      fakeCopy(recipent, data, options, callback);
    };
  }
}