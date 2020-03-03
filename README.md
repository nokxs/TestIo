# TestIo - ioBroker JavaScript Test Framework
![Actions Status](https://github.com/nokxs/TestIo/workflows/CI/badge.svg)

![Logo](https://raw.githubusercontent.com/nokxs/TestIo/master/assets/logo.png)

TestIo is small framework for testing [ioBroker JavaScript](https://github.com/ioBroker/ioBroker.javascript) scripts. It mocks the functions defined by the [JavaScript engine](https://github.com/ioBroker/ioBroker.javascript/blob/master/docs/en/javascript.md) with [Sinon.js](https://sinonjs.org/).

## Usage

TestIo can be used with any JavaScript test execution framework and should be loaded with `const testio = require("iobroker-test-io");`. 

After you loaded the module, the global function `check(pahtToScirpt, testFunction)` is available. The first parameter is the relative path (from where the test is located) to the script to test. The second one is the test function, which should contain your test code. Before the test function is called, the test script is loaded and after the test run it is unloaded again. This ensures no state remains between tests.

Every function defined by ioBroker has its own fake object and can be accessed via the `testio` object (if you required the module via `const testio = require("iobroker-test-io");`). For example, if you want to check if `setState()` was called, you can use the fake which is used in the background. It is accessible via `testio.setState.fake`. In combination with sinon.js an assert could look like this: `sinon.assert.calledWith(testio.createState.fake, "switches.trigger");`. This tests, if `createState` was called with `switches.trigger`. Example:

```javascript
const chai = require("chai");
const sinon = require("sinon");
const testio = require("iobroker-test-io");

describe("Switch tests", () => {

    it("switches.trigger is created", () => {

        // The check function loads the ioBroker script for the test and unloads it again after the test
        check("../../path/to/ioBroker/script", () => {
            // check if switches.trigger was created as state
            sinon.assert.calledWith(jsMock.createState.fake, "switches.trigger");
        });
    });
});
```

Analog to this you can access the fake of any function defined by the ioBroker JavaScript engine. Additionally you can reset the call state of any function any time with the `resetHistory()` function. Example: `testio.setState.resetHistory()`.

The function `on` is a little bit more advanced than the others. It provided additionally the function `trigger(id, state)`, which enables to trigger the on function in a scirpt. `id` is the object id to trigger and `state` is the complete sate as it would be accessible in the real `on` function. Example:

```javascript
const chai = require("chai");
const testio = require("iobroker-test-io");

const { expect } = chai;

describe("Switch tests", () => {

    // This test checks if Shelly_2 is switched on, when Shelly_1 is switched on.
    it("switches both shellies on", () => {

        // The check function loads the ioBroker script for the test and unloads it again after the test
        check("../../path/to/ioBroker/script", () => {

            // simulate that Shelly_1 is switched on
            testio.on.trigger("shelly.0.Shelly_1.Relay0.Switch", { 
                state: { 
                    ack: true,
                    val: true
                }
            });

            // check if Shelly_2 is also switched on
            expect(testio.setState.fake.calledWith("shelly.0.Shelly_2.Relay0.Switch", true)).to.be.true;
        });
    });
});
```
