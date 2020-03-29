import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class CreateState extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).createState = function (
        name: string,
        initialValue: any,
        forceCreation: boolean | (() => {}),
        common: string,
        native: string,
        callback: () => {}
    ): void {
      if (name == null) {
        throw new Error("createState: name has to be defined");
      }

      if (forceCreation && typeof forceCreation === "function") {
        forceCreation();
      }

      if (callback && typeof callback === "function") {
        callback();
      }

      fakeCopy(name, initialValue, forceCreation, common, native, callback);
    };
  }
}