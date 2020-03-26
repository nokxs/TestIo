import * as sinon from "sinon";

export const fake: sinon.SinonStub = sinon.stub();

export function resetHistory(): void {
  fake.resetHistory();
}

(<any>global).clearSchedule = function clearSchedule(schedule: string): void {
  fake(schedule);
};
