const array = [1, 10, 4, 5, 6, 7, 8, 9]

// Код, который проверит, является ли массив отсортированным

function arrayIsSorted(arr) {
    if (!Array.isArray(arr)) {
        return arr;
    }
    const sortArr = JSON.stringify([...arr].sort((a, b) => a - b));
    console.log(arr);
    console.log(sortArr);
    if (JSON.stringify(arr) === sortArr) {
        return true
    }
    return false
}

let isSortedArray = arrayIsSorted(array);
console.log(isSortedArray);
