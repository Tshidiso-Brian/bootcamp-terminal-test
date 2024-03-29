let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('The total-Phone-Bill function', function(){

    it('should return the total bill for the data provided', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });

    it('should return the total bill for the data provided', function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });

    it('should return the total bill for the data provided', function(){
      
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
   
});