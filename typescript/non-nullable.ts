type Color = string | null | undefined;

const backgroundColor: Color = null;

type HeaderColor = NonNullable<Color>;

// const headerColor:HeaderColor = null; // this will gives error

const headerColor: HeaderColor = 'red';
