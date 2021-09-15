module.exports = function countAllPaarl (paarlString){
    const regDigits = paarlString.split(',');
    const regisNumbers = [];
    for (var y = 0; y<regDigits.length ;y++){
    const currentReg = regDigits[y].trim();
    if (currentReg.startsWith('CJ')){
        regisNumbers.push(currentReg)
      }
    }
   return regisNumbers.length
  }