let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('The countRegistrationNumber function', function(){

    it('should return the number of registration numbers in the string', function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
         assert.equal(regCount, 3);
    });

    it('should return the number of registration numbers in the string', function(){
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });

});