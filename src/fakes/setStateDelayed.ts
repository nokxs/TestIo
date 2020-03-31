import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class SetStateDelayed extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).setStateDelayed =
      function(id: string, state: any, isAck: boolean, delay: number, clearRunning: boolean, callback: () => {}): void {
      fakeCopy(id, state, isAck, delay, clearRunning, callback);
    };
  }
}