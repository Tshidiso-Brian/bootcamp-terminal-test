let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The fromBelville function', function(){


    it('should return true if a registration number is from Bellville', function(){
        assert.equal (isFromBellville('CY 123'), true);
    });
    it('should return false if a registration number is not from Bellville', function(){
        assert.equal(isFromBellville('CJ 123'), false)
    });
});                                                                                                             