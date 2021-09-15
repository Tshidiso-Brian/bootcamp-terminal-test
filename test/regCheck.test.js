let assert = require("assert");
let regCheck = require("../regCheck");

describe('The regChecking function', function(){


    it('should return true if a registration number is for GP, L, EC, MP registration plates', function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });
    it('should return false if a registration number is not for  GP, L, EC, MP registration plates', function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });


    it('should return true if a registration number is for GP, L, EC, MP registration plates', function(){
        assert.equal(regCheck('5566 L', 'L'), true);
    });
    it('should return false if a registration number is not for  GP, L, EC, MP registration plates', function(){
        assert.equal(regCheck('5566 L', 'M'), false);
    });

    
});     