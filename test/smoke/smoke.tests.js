const chai = require("chai");
const sinon = require("sinon");

const jsMock = require("../..");

describe("Smoke test", () => {
  it("loads script", () => {
    check("./test/smoke/smoke.iobroker.js", () => {
      
    });
  });
});