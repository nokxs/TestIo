import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class FormatDate extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).formatDate = function(millisecondsOrDate: number | Date, format: string): void {
      fakeCopy(millisecondsOrDate, format);
    };
  }
}