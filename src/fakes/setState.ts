import { IobrokerFakeBase } from "./common/IobrokerFakeBase";

export class SetState extends IobrokerFakeBase {
  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    (<any>global).setState = function(id: string, state: any, ack: true, callback: () => {}): void {
      if (id == null) {
        throw new Error("setState: id has to be defined");
      }

      if (state == null) {
        throw new Error(`setState: state has to be defined for id '${id}'`);
      }

      fakeCopy(id, state, ack, callback);
    };
  }

  getLastSetState(id: string): any | null {
    const call: sinon.SinonSpyCall = this.fake.getCalls().reverse().find((c) => c.args[0] === id);

    if (call) {
      return call.args[1];
    }

    return null;
  }
}