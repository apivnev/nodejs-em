const obj = {id:1}

function isEmpty (obj){
    if(obj === null || typeof(obj) !== 'object'){
        return console.log('Invalid object');
    }
    if(Object.keys(obj).length < 1){
        return true
    }
    return false;
}


console.log(isEmpty(obj))