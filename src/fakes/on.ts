import { IobrokerFakeBase } from "./common/IobrokerFakeBase";
import { IPattern } from "./common/IPattern";
import { IOnCallbackResult } from "./common/IOnCallbackResult";

interface IOnCall {
  pattern: string | IPattern;
  callbackOrId: (obj: any) => {} | string;
  value: any;
}

export class On extends IobrokerFakeBase {
  private repository: Array<IOnCall>;

  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    this.repository = new Array();
    const repositoryCopy: Array<IOnCall> = this.repository;
    (<any>global).on = function(pattern: string | IPattern, callbackOrId: (obj: IOnCallbackResult) => {} | string, value: any): void {
      fakeCopy(pattern, callbackOrId, value);
      repositoryCopy.push({
        pattern,
        callbackOrId,
        value,
      });
    };
  }

  trigger(id: string, value: IOnCallbackResult): void {
    const matches: Array<IOnCall> = this.repository.filter((onCall) => {
      if (typeof onCall.pattern === "string") {
        return onCall.pattern === id;
      }

      if (typeof onCall.pattern === "object") {
        if (typeof onCall.pattern.id !== "undefined") {
          return onCall.pattern.id === id;
        }

        // return id.match(new RegExp(e.pattern, "i")) != null; // TODO: support regex
      }

      return false;
    });

    if (matches.length === 0) {
      throw new Error(`Cannot trigger on for '${id}', because it is not registered`);
    }

    matches.forEach((match) => {
      const triggerValue: any =
        typeof value.state === "undefined" ||
        typeof value.state.val === "undefined" ? { state: { val: value } } : value;
      match.callbackOrId(triggerValue);
    });
  }
}