interface Person {
	id: number;
	name: string;
	phone: string;
	address: string;
	postalCode: string;
}

/**
 * Partial - this utility function help to create subtype from a another type by including all the properties with optional
 */
type OldPerson = Partial<Person>;
// this equitant to {id?:number; name?:string; phone?:string; address?:string; postalCode?:string;}

const person: Person = {
	id: 1,
	name: 'Brian Walter',
	phone: '123456789',
	address: 'No 26, Colombo 03, Sri Lanka',
	postalCode: '1002',
};

const address: OldPerson = {
	id: 3,
	name: 'Jimmy Sand',
	address: 'No 26, Colombo 03, Sri Lanka',
};
