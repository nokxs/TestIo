import { IobrokerFakeBase } from "./common/IobrokerFakeBase";
import { mocks } from "./../index";

export class GetState extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).getState = function(id: string): any {
      if (!(id)) {
        throw new Error("getState: id has to be defined");
      }

      const state: any = mocks.setState.getLastSetState(id);

      if (state) {
        return { val: state };
      }

      return fakeCopy(id);
    };
  }
}