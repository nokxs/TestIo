import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class SendToHost extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).sendToHost = function(hostName: string, command: string, message: any, callback: (res: any) => {}): void {
      fakeCopy(hostName, command, message, callback);
    };
  }
}