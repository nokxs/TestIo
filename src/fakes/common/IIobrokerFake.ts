export interface IIobrokerFake {
  fake: sinon.SinonStub;
  resetHistory(): void;
}
