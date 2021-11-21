// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(num => num * -1);
  }
  
  function mapToNoChange(sourceArray) {
    return sourceArray.map(num => num);
  }
  
  function mapToDouble(sourceArray) {
    return sourceArray.map(num => num * 2);
  }
  
  function mapToSquare(sourceArray) {
    return sourceArray.map(num => num ** 2);
  }
  
  const reducer = (accumulator, item) => {
    return accumulator + item;
  }
  
  function reduceToTotal(sourceArray, startingPoint=0) {
    return sourceArray.reduce(reducer, startingPoint);
  }
  
  function turnArrayTrue(x, y) {
    return !!x && !!y;
  }
  
  function reduceToAllTrue(array)  {
    return array.reduce(turnArrayTrue);
  }
  
  function turnArrayFalse(x, y) {
    return !!x || !!y;
  }
  
  function reduceToAnyTrue(array){
    return array.reduce(turnArrayFalse)
  }

  