import * as sinon from "sinon";

export const fake: sinon.SinonStub = sinon.stub();

export function resetHistory(): void {
  fake.resetHistory();
}

(<any>global).adapterSubscribe = function adapterSubscribe(id: string): void {
  fake(id);
};