const findMax = (arr1, arr2) => {
    const newArray = [...arr1, ...arr2];
    const max = Math.max(...newArray);
    return max;
}

const result = findMax([10, 12, 15, 3, 4], [33, 12, 5, 8, 9]);
console.log(result);