const object = {
	prop1: null,
	prop2: {},
	prop3: 3,
	prop4: 'str',
	prop5: 100,
	prop6: true
}

function typeOfProp(obj) {
	if (obj === null || typeof (obj) !== 'object') {
		return console.log('Invalid object');
	}
	const typesObj = { number: 0, string: 0, boolean: 0, null: 0, undefined: 0, symbol: 0, bigint: 0, function: 0, object:0 };
	for (key in obj) {
		if (obj[key] === null) {
			typesObj.null++;
			continue;
		}
		const type = typeof (obj[key]);
		switch (type) {
			case "string": typesObj.string++; continue;
			case "number": typesObj.number++; continue;
			case "bigint": typesObj.bigint++; continue;
			case "boolean": typesObj.boolean++; continue;
			case "symbol": typesObj.symbol++; continue;
			case "undefined": typesObj.undefined++; continue;
			case "object": typesObj.object++; continue;
			case "function": typesObj.function++; continue;
		}
	}
	return typesObj
}

const result = typeOfProp(object);

console.log(result); // {null: 1, object: 1, string: 1, number: 2}