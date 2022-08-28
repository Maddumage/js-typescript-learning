interface Person {
	id: number;
	name: string;
	phone: string;
	address: string;
	postalCode: string;
}

/**
 * Pick - this utility function help to create subtype from a another type by including some fields only
 */
type Address = Pick<Person, 'address' | 'postalCode'>;

const person: Person = {
	id: 1,
	name: 'Brian Walter',
	phone: '123456789',
	address: 'No 26, Colombo 03, Sri Lanka',
	postalCode: '1002',
};

const address: Address = {
	address: 'No 26, Colombo 03, Sri Lanka',
	postalCode: '1002',
};
