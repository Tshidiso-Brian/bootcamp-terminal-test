let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('The from-Where function', function(){

    it('should return the town the car is from', function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });
    it('should return the town the car is from', function(){
        assert.equal(fromWhere('CJ'), 'Paarl');})

    it('should return the town the car is from', function(){
        assert.equal(fromWhere('CA'), 'Cape Town');})

    it('should return the town the car is from', function(){
        assert.equal(fromWhere('CC'), 'Some other place!');})   
});