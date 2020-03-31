import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class OnMessageUnregister extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).onMessageUnregister = function(messageName: string, data: (data: any, callback: () => {}) => {}): void {
      fakeCopy(messageName, data);
    };
  }
}