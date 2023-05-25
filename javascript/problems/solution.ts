// static type checking

// const obj = { width: 10, height: 15 };
// const area = obj.width * obj.heigth; // error in height

// // typed superset of javascript meaning it add rules about how different kinds of value can be used.

// console.log(4 / []); // right must be a number / any / bigint / enum

// // runtime behaviour same as javascript -> typescript code will  run same way
// console.log(4 / 0); // infinity

// Erased types:

// typescript compiles -> erases types to produce compile code. js code then has no types

// we might see type errors in compilation but type checker has no idea how program works

// TypeScript is JavaScript’s runtime with a compile-time type checker

// Typescript ensures strong type safety at compile time

/* types by inference:  */

let hello = "hello world"; // type string

// defining types:

interface Person {
  name: string;
  id: number;
}

const male: Person = {
  name: "Nabhag",
  id: 63,
};
// const male: Person = {
//   username: "Nabhag", // error as username is not defined in Person
//   id: 63,
// };

console.log(typeof male); // object

// we can use interface with classes

class Student {
  info: Person;
  constructor(info: Person) {
    this.info = info;
  }
}

const student: Student = new Student(male);
console.log(student);

function isStudent(person: Person): string | undefined {
  // string | undefined | null | void | boolean | number | bigint | symbol | object | any | unknown | never
  return student.info == person ? "yes" : undefined;
}

console.log("is person a student too: ", isStudent(male));

// typescript introduces types:  any | unknown | never | void
/* unknown: (ensure someone using this type declares what the type is) */
/* never (it’s not possible that this type could happen) */
// void (a function which returns undefined or has no return value).
