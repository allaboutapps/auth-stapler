
import { server } from "./utils/MockServer";

import "mocha";

const chai = require("chai");
// import chaiAsPromised = require("chai-as-promised");
const requireDir = require("require-dir");



const chaiHttp = require("chai-http");
// Setup chai plugins
chai.use(chaiHttp);



before(function (done) {
    server.start();
    done();
});


// // app related tests...
// requireDir("./tests", {
//     recurse: true
// });
