const operations = (numbers) => {
    const squareArr = [];
    let sum = 0;
    
    for(const number of numbers){
        const squre = number * number;
        squareArr.push(squre);
        sum = sum + squre;
    }
    let avg = sum / squareArr.length;
    // console.log(squareArr);
    return squareArr, sum, avg;
}

const result = operations([12, 44, 34, 2 ,12]);
console.log(result);