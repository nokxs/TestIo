import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class SendTo extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).sendTo = function(adapter: string, command: any, message: any, callback: (res: any) => {}): void {
      fakeCopy(adapter, command, message, callback);
    };
  }
}