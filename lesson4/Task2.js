const obj = { prop1: 1, prop2: 2, prop3: true, prop4: 'test', prop5: 10 }


function evenProps(obj) {
    if (obj === null || typeof (obj) !== 'object') {
        return console.log('Invalid object');
    }
    const result = {};

    for (key in obj){
        if(obj[key] %2 === 0){
            result[key] = obj[key]
        }
    }
    return result;
}

const resultObj = evenProps(obj);

console.log(resultObj); // { prop2: 2, prop5: 10 }