interface AB {
	a: string;
	b: number;
}

/**
 * Readonly creates a new type with all properties of type set to readonly,
 * which means that they cannot be reassigned after initialization;
 */
type ReadonlyAB = Readonly<AB>;
// equivalent to:
// {
//     readonly a:string;
//     readonly b:string;
// }

let ab: ReadonlyAB = {
	a: 'ada',
	b: 23,
};

// cannot do this anymore
// ab.a = 'dsd';
// ab.b = 34;
