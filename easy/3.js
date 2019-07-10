function minMax(arr) {
    let howMany = arr.length;
    let winner = arr[0]; 
    let loser = arr[howMany-1];
    

    for(i = 0; i<howMany; i++){
        if(winner<arr[i]){
            winner = arr[i];
        }
        if(loser>arr[i]){
            loser = arr[i];
        }
    }
    

    let returnValueArr = [loser, winner];
    //console.log(returnValueArr);
    
    return returnValueArr;
}

// test(minMax([14, 35, 6, 1, 34, 54]), [1, 54])
// test(minMax([1.346, 1.6532, 1.8734, 1.8723]), [1.346, 1.8734])
// test(minMax([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345]), [0.2345, 0.984])
// test(minMax([13, 72, 98, 43, 24, 65, 31]), [13, 98])
// test(minMax([-54, -23, -54, -21]), [-54, -21])
// test(minMax([-0.473, -0.6834, -0.1287, 0.5632]), [-0.6834, 0.5632])
// test(minMax([0, 0, 0, 0]), [0, 0])