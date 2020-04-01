import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class Unsubscribe extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).unsubscribe = function(id: string): void {
      if (!(id)) {
        throw new Error("unsubscribe: idOrHandler has to be defined");
      }

      fakeCopy(id);
    };
  }
}