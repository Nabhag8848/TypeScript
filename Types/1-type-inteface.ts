// Prefer Interfaces over Type Aliases. Use Type only when you need specific feature.

type TBird = {
  wing: 2;
};

interface IBird {
  wing: 2;
}

const bird1: TBird = {
  wing: 2,
};

const bird2: IBird = {
  wing: 2,
};

const bird3: IBird = bird1; // no error
const bird4: TBird = bird2; // no error

// both supports extending other interface / types
// intersection types for extending multiple types/interfaces from types
type Owl = { visiblity: "day" } & TBird;
type Robin = { visiblity: "night" } & IBird;

// extends keyword for extending multiple types/interfaces from interfaces
interface Peacock extends TBird {
  colourful: true;
  flies: false;
}
interface Chicken extends IBird {
  colourful: false;
  flies: false;
}

let owl: Owl = { wing: 2, visiblity: "day" };
let chicken: Chicken = { wing: 2, colourful: false, flies: false };

// Reason1: you will get better error messages when using interfaces

// owl = chicken; // error
// chicken = owl; // error

// Reason2: Interfaces are open and can be extended from anywhere in the codebase. Types are closed and cannot be extended.

interface Kitten {
  purrs: boolean;
}

interface Kitten {
  colour: string;
}

const kitten: Kitten = { purrs: true, colour: "black" };
console.log("kitten: ", kitten);

type Puppy = {
  color: string;
};

// type Puppy = {
//   toys: number; // throws an duplicate identifier error
// };

// https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript/52682220#52682220

/* 
When to use type:

    Use type when defining an alias for primitive types (string, boolean, number, bigint, symbol, etc)
    Use type when defining tuple types
    Use type when defining function types
    Use type when defining a union
    Use type when trying to overload functions in object types via composition
    Use type when needing to take advantage of mapped types

When to use interface:

    Use interface for all object types where using type is not required (see above)
    Use interface when you want to take advantage of declaration merging.

*/ 
