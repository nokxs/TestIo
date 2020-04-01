import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class GetAttr extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).getAttr = function(obj: any, path: string): void {
      if (obj == null) {
        throw new Error("getAttr: obj has to be defined");
      }

      if (path == null) {
        throw new Error("getAttr: path has to be defined");
      }

      return fakeCopy(obj, path);
    };
  }
}