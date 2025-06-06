const array = [1, 2, 3, 'f', true, false]
const copyArray = array.map(item => item);

console.log(array);
console.log(copyArray);
array.push('Bugaga');

console.log(array);
console.log(copyArray);

const copyTwoArray = [];

for (let i = 0; i < array.length; i++) {
    copyTwoArray[i] = array[i];
}

console.log(copyTwoArray);