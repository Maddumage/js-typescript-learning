const numbers = [3, 45, 2, 3, 46, 6, 2, 9, 4, 8, 1, 45];

const unique = [...new Set(numbers)];

console.log('Unique 1 => ', unique);

const unique2 = numbers.filter(
	(item, index) => numbers.indexOf(item) === index
);

console.log('Unique 2 => ', unique2);

const unique3 = numbers.reduce(
	(partial, item) =>
		partial.includes(item) ? partial : [...partial, item],
	[]
);

console.log('Unique 3 => ', unique3);
