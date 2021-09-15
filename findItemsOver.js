module.exports = function findItemsOver(itemList2, itemList) {
    var list2 = [];
    for (var i in itemList2) {
      if(itemList2[i].qty > itemList) {
        list2.push(itemList2[i])
      }
    }
    
    return list2;
  }