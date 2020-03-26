import { describe, it } from "mocha";

import { check } from "../../src";

describe("Smoke test", () => {
  it("loads script", () => {
    // tslint:disable-next-line: no-empty
    check("../test/smoke/smoke.iobroker.js", () => { });
  });
});
