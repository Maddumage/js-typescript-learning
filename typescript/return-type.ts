const getUser = () => ({
	firstName: 'John',
	lastName: 'Doe',
});

type FunctionReturnType = ReturnType<typeof getUser>;

// equivalent to : { firstName: string; lastName:string; }
