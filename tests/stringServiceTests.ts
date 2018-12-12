import "mocha";
import * as chai from "chai";
import { StringService } from "../lib/services/string.service";

var stringService = new StringService();
describe("compare function test", () => {
    it("should return true", () => {
        var result = stringService.compare("test", "Test", true);
        chai.expect(result).to.equal(0);
    });
    it("should return true", () => {
        var result = stringService.compare("test", "test", false);
        chai.expect(result).to.equal(0);
    });
    it("should return false", () => {
        var result = stringService.compare("test", "Test", false);
        chai.expect(result).to.lessThan(0);
    });
    it("should return false", () => {
        var result = stringService.compare("test", "notMatch", true);
        chai.expect(result).to.greaterThan(0);
    });
});

describe("format function test", () => {
    it("should return Test 1", () => {
        var result = stringService.format("Test {0}", "1");
        chai.expect(result).to.equal("Test 1");
    });
});

describe("isNullOrEmpty function test", () => {
    it("should return true", () => {
        var result = stringService.isNullOrEmpty('');
        chai.expect(result).to.equal(true);
    });
    it("should return false", () => {
        var result = stringService.isNullOrEmpty('not empty');
        chai.expect(result).to.equal(false);
    });
});