import * as sinon from "sinon";
import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class AdapterUnsubscribe extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).adapterUnsubscribe = function adapterUnsubscribe(id: string): void {
      fakeCopy(id);
    };
  }
}