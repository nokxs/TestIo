import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class OnMessage extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).onMessage = function(messageName: string, data: {data: string, callback: () => {}}): void {
      fakeCopy(messageName, data);
    };
  }
}