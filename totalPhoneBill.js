module.exports = function totalPhoneBill(billString){
    const billing = billString.split(',');
    let total = 0;
    
    for (var y = 0; y<billing.length;y++){
    const billList = billing[y].trim();
     
      if(billList.includes('call')){
         total += 2.75;
       }
       else if(billList.includes('sms')){
         total += 0.65;
       }
    } 
    return 'R' + total.toFixed(2); 
  }