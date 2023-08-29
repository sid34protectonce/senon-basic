const sinon = require("sinon");
const chai = require("chai");
var add = require("../add.js");
var proxyquire =  require('proxyquire')

describe("Testing add function", () => {
    let addStub;
    beforeEach(()=>{
        addStub = sinon.stub(add);
    })

    afterEach(()=>{
        sinon.restore();
    })

    it("should return proper results", () =>{
        let addFunc = proxyquire('../add.js', { 'add': addStub });
        chai.expect(addFunc(1, 2)).to.equal(3);
    })

    it("should return improper results",()=>{
        let addFunc = proxyquire('../add.js', { 'add': addStub });
        chai.expect(addFunc(4, 2)).to.equal(4);
    })
});  