import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class Exec extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).exec = function(cmd: string, callback: () => {}): void {
      fakeCopy(cmd, callback);

      if (callback) {
        callback();
      }
    };
  }
}