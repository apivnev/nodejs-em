const obj1 = {
    id: 1,
    name: 'Ivan',
    adress: {
        region: 63,
        city: 'Samara',
        street: 'Chekistov',
        home: 12
    },
    comments: [{ id: 1, text: 'Good' }, { id: 2, text: 'Shit!!!' }],

}

const obj2 = {
    id: 1,
    name: 'Ivan',
    adress: {
        region: 63,
        city: 'Samara',
        street: 'Chekistov',
        home: 12
    },
    comments: [{ id: 1, text: 'Good' }, { id: 2, text: 'Shit!!!' }],
}

function compareObj(objOne, objTwo) {
    if (objOne === null || typeof (objOne) !== 'object' || objTwo === null || typeof (objTwo) !== 'object') {
        return console.log('Invalid object');
    }

    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
    for (key in obj1) {
        if(typeof(obj1[key]) === 'function') throw Error('Function!!!!')
    }
    for (key in obj2) {
        if(typeof(obj2[key]) === 'function') throw Error('Function!!!!')
    }
    if (JSON.stringify(obj1) !== JSON.stringify(obj2)) return false
    return true
}

console.log(compareObj(obj1, obj2));
const f = ()=>{}
console.log(1 == '1')