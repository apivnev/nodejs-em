const a = true;
const b = true;
const c = true;

let result;

if (c) {
    result = a || b;
} else {
    result = a && b
}

console.log(result);

let res = c ? (a || b) : (a && b);

console.log(res);