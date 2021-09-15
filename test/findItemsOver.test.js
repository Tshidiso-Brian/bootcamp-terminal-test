let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('The find-Items-Over function', function(){

    it('should return products that have quantity higher than the threshold', function(){

        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        
        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];
        assert.deepEqual(results, findItemsOver(itemList, 20))
    });

});