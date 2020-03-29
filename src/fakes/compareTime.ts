import { IobrokerFakeBase } from "./common/IobrokerFakeBase";
import { AstroTime } from "./common/AstroTime";
import { CompareOperation } from "./common/CompareOperation";
import { IAstroObject } from "./common/IAstroObject";

export class CompareTime extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).compareTime = function (
        startTime: AstroTime | IAstroObject,
        endTime: AstroTime | IAstroObject,
        operation: CompareOperation,
        timeToCompare: Date
    ): void {
      fakeCopy(startTime, endTime, operation, timeToCompare);
    };
  }
}

