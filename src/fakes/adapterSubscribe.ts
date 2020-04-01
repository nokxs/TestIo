import * as sinon from "sinon";
import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class AdapterSubscribe extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).adapterSubscribe = function adapterSubscribe(id: string): void {
      fakeCopy(id);
    };
  }
}