module.exports = function findItemsOver20(items1) {
    var list1 = [];
    
    for (var i = 0; i < items1.length; i++) {
      if(items1[i].qty > 20) {
        list1.push(items1[i]);
      }
    }
   
    return list1;
  }