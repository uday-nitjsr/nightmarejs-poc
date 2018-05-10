# nightmarejs-poc
install all the node module

`npm install`

run tests


`./node_modules/mocha/bin/mocha ./tests`

run with reporters

`./node_modules/mocha/bin/mocha ./tests --reporter mochawesome`


1. Can be run both headless and headed
2. Only support for Electron
3. Each test is forced to be written in isolation 
4. Can use evaluate only once in a test which is used to verify the state of the element. Looking for workaround
Found its workaround : evaluate automatically returns a promise and `.then()` and `.catch()` can be used along with it to verify returned value. In `then()` method we can call again nightmare instance and do next level of steps as required and chain another evaluate to it.
5. inside evaluate we have to interact with the scope of browser. That is tough as user has to be aware of browser and document api
6. Electron instance is not closing in some cases . Refer tescase #3
Fixed: make sure `.end()` is chained before calling `evaluate()`