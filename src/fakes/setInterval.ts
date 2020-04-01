import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class SetInterval extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).setInterval = function(callback: () => {}, ms: number, arg1: any, arg2: any, arg3: any, arg4: any): void {
      fakeCopy(callback, ms, arg1, arg2, arg3, arg4);
    };
  }
}