const a = 25;
const b = 43;
const c = -1;

if (a < 0 || b < 0 || c < 0 || (a + b + c) === 100) {
    console.log('Нет');
}
if (a > (c + b)) {
    console.log('-1');
}
if ((a + b + c) < 0) {
    console.log('500')
} else {
    console.log('0')
}