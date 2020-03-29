import { IIobrokerFake } from "./IIobrokerFake";
import sinon = require("sinon");

export abstract class IobrokerFakeBase implements IIobrokerFake {
  public fake: sinon.SinonStub = sinon.stub();

  constructor() {
    this.registerGlobalFake(this.fake);
  }

  public resetHistory(): void {
    this.fake.resetHistory();
  }

  abstract registerGlobalFake(fake: sinon.SinonStub): void;
}
