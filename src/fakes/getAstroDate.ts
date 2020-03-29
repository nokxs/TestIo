import { IobrokerFakeBase } from "./common/IobrokerFakeBase";
import { AstroTime } from "./common/AstroTime";

export class GetAstroDate extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).getAstroDate = function(pattern: AstroTime, date: Date): void {
      if (pattern == null) {
        throw new Error("getAstroDate: pattern has to be defined");
      }

      return fakeCopy(pattern, date);
    };
  }
}
