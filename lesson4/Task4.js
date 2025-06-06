const object = {
    name: 'Ivan',
    lastName: 'Kosenko',
    adress: {
        region: 63,
        city: 'Samara',
        street: 'Chekistov',
        home: 12
    },
    comments: [{ id: 1, text: 'Good' }, { id: 2, text: 'Shit!!!' }],
    f: () => {
        console.log(this.name)
    }
}

function copyObj(obj) {
    if (obj === null || typeof (obj) !== 'object') {
        return console.log('Invalid object');
    }
    const tempCopyObj = {};
    for (key in obj) {
        if (typeof (obj[key]) !== 'object') {
            tempCopyObj[key] = obj[key];
        } else if (Array.isArray(obj)) {
            tempCopyObj.length = obj.length;
            return Array.from(obj);
        }
        else {
            tempCopyObj[key] = copyObj(obj[key])
        }
    }
    return tempCopyObj
}

const objCopy = copyObj(object);

console.log(object);
console.log(objCopy)
objCopy.comments.push({ id: 3, text: 'Ha ha ha ' });

console.log(object);
console.log(objCopy)