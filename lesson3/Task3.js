const array = [5, 3, 2, 8, 1, 4]  ;

function oddArrSort(arr) {
    if (!Array.isArray(arr)) {
        console.log('Проблема с масивом');
        return
    }
    const oddNums = [];
    const resultArray = [];
    for (num of arr) {
        if (num % 2 !== 0) oddNums.push(num);
    }
    oddNums.sort((a, b) => a - b);
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            resultArray.push(arr[i]);
        }
        else {
            resultArray.push(oddNums.shift());
        }
    }
    return resultArray;
}

const result = oddArrSort(array);
console.log(result);