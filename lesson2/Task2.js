const a = 110;
const b = 0;


function trueOrFalse(a, b) {
    if ((a + b) > 100) return true
    return false
}

const c = trueOrFalse(a, b);
if (c) return console.log('Да');
return console.log('Нет')