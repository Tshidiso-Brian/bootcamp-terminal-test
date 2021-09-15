let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('The weekday function', function(){

    it('should find out if the parameter passed in is a day of the week ', function(){
        assert.equal(isWeekday('Saturday'), false);
    });
    it('should find out if the parameter passed in is a day of the week ', function(){
        assert.equal(isWeekday('Monday'), true);
    });
});