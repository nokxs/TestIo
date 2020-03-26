import * as sinon from "sinon";

export interface IIobrokerFake {
  fake: sinon.SinonStub;
  resetHistory(): void;
}

export class AdapterUnsubscribe implements IIobrokerFake {
  public fake: sinon.SinonStub = sinon.stub();

  constructor() {
    const fakeCopy: any = this.fake;
    (<any>global).adapterUnsubscribe = function adapterUnsubscribe(id: string): void {
      fakeCopy(id);
    };
  }

  public resetHistory(): void {
    this.fake.resetHistory();
  }
}