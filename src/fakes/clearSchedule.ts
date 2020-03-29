import * as sinon from "sinon";
import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class ClearSchedule extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).clearSchedule = function clearSchedule(schedule: string): void {
      fakeCopy(schedule);
    };
  }
}