import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class FormatValue extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).formatValue = function(value: number | string, decimals: number, format: string): void {
      fakeCopy(value, decimals, format);
    };
  }
}