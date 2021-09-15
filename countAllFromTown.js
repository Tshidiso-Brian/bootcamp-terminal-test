module.exports = function countAllFromTown (regNumber,townString){
    const regDigits = regNumber.split(',');
    
    
    let regisNumbersCounter = 0;
    var regisNumbers2 = [];
    
    for (var y = 0; y<regDigits.length ;y++){
    const currentReg = regDigits[y].trim();
   
      if (currentReg.includes(townString)){
        regisNumbersCounter++;
        
        }
      
    }
   return regisNumbersCounter;
   
  }