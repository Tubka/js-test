const test = (actual, expected) => {
  if(Array.isArray(expected)){
    compareArrays(actual, expected);
  }else{
     compareValues(actual, expected)
  }
}

const compareArrays = (actual, expected) => {
  if(!_.isEqual(actual, expected)){
    console.error(`Actual: [${actual}], Expected: [${expected}]`);
  }
}

const compareValues = (actual, expected) => {
  if(actual !== expected){
      console.error(`Actual: ${actual}, Expected: ${expected}`);
    }
}

const testSimilar = (actual, expected) => {
    if(!_.isEqual(actual, expected)){
        console.error(`Expected: [${expected}], Actual: [${actual}]`);
    }
}

const testSimilarObject = (actual, expected) => {
    if(!_.isEqual(actual, expected)){
        console.error(`Expected: ${JSON.stringify(expected)}, Actual: ${JSON.stringify(actual)}`);
    }
}
