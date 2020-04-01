import { IobrokerFakeBase } from "./common/IobrokerFakeBase";
import { ISchedulePattern } from "./common/ISchedulePattern";

interface ICallRepositoryEntry {
  pattern: string | ISchedulePattern;
  callback: () =>  {};
}

export class Schedule extends IobrokerFakeBase {
  private repository: Array<ICallRepositoryEntry> = [];

  registerGlobalFake(fakeCopy: sinon.SinonStub): void {
    this.repository = [];
    let repositoryCopy: Array<ICallRepositoryEntry> = this.repository;
    (<any>global).schedule = function(pattern: string | ISchedulePattern, callback: () => {}): void {
      if (pattern == null) {
        throw new Error("schedule: pattern has to be defined");
      }

      if (callback == null) {
        throw new Error(`schedule: callback has to be defined for id '${pattern}'`);
      }

      fakeCopy(pattern, callback);

      repositoryCopy.push({
        pattern,
        callback,
      });
    };
  }

  resetHistory(): void {
    super.resetHistory();
    this.repository = [];
  }

  trigger(pattern: string | ISchedulePattern): void {
    const matches: Array<ICallRepositoryEntry> = this.getMatchingCalls(pattern);

    if (matches.length === 0) {
      throw new Error(`Cannot trigger schedule for '${pattern}', because it is not registered`);
    }

    matches.forEach((match) => {
      match.callback();
    });
  }

  private getMatchingCalls(pattern: string | ISchedulePattern): Array<ICallRepositoryEntry> {
    return this.repository.filter((e) => {
      if (pattern instanceof String && e.pattern instanceof String) {
        return pattern.match(<string>e.pattern) != null;
      }

      return pattern === e.pattern;
    });
  }
}

