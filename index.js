function iterativeLog(array){
  function logger(element, index, array){
    console.log(`${index}: ${element}`);
  }
  array.forEach(logger);
}

function iterate(callback){
  var myArray = ['hello', 'callback', 'world'];
  myArray.forEach(callback);
  return myArray;
}

function doToArray(array, callback){
  array.forEach(callback);
}
