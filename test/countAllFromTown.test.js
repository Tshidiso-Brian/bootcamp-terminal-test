let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('The count-All-From-Town function', function(){

    it('should return number registration numbers in the string that is for that town', function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        //fromStellies should contains
        assert.equal(fromStellies, 3)       
    });
    
    it('should return number registration numbers in the string that is for that town', function(){
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        //fromStellies should contains
        assert.equal(fromKuilsriver, 1)      
    });
});