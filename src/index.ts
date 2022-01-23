/**
 * Basic Types
 */
let id: number = 5;
let company: string = 'Russell Chan';
let isPublished: boolean = true;
let x: any = 'Hello';
// x = false // Error
let age: number;

let ids: number[] = [1, 2, 3, 4];
// ids.push('Hello') // Error
let arr: any[] = [1, 'Str', false];

/**
 * Tuple
 */
let person: [number, string, boolean] = [1, 'Russell', false];
// Tuple Array
let employee: [number, string][];

employee = [
  [1, 'test'],
  [2, 'test2'],
  [3, 'test3'],
];

/**
 * Union
 */
let pid: string | number;
pid = 20;
pid = 'hello';

/**
 * Enum
 */
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction1.Up); // 1
console.log(Direction1.Left); // 3

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

console.log(Direction2.Up); // Up

/**
 * Objects
 */
type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: 'Russell',
};

const tempUser: {
  address: string;
  umur: number;
} = {
  address: 'Jln. Kelapa Gading',
  umur: 21,
};

/**
 * Type Assertion
 */
let cid: any = 1;
// let customerId = <number>cid // Method 1
let customerId = cid as number; // Method 2

let customerId2 = cid as boolean;
// customerId2 = "string" // Error

/**
 * Functions
 */
function addNum(x: number, y: number): number {
  return x + y;
}
console.log(addNum(1, 2));
// console.log(addNum("1", "3")) // Error

// Void
function log(message: string | number): void {
  console.log(message);
}
log('Hello');
// log(true) // Error

/**
 * Interface
 */
interface UserInterface {
  readonly id: number; // readonly cannot be changed
  name: string;
  age?: number; // Optional property
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
};
// user1.id = 5 // Error because readonly

interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

// // You cannot assign interface to primitive types
// type Point = number | string
// const p1: Point = 1

/**
 * Classes
 */
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}
class Person implements PersonInterface {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is now registered`;
  }
}
const person1 = new Person(1, 'Jonathan');
console.log(person1.register()); // Jonathan is now registered

// Subclass
class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}
const emp = new Employee(2, 'Russell', 'Frontend Developer');
console.log(emp.name, emp.register(), emp.position);

/**
 * Generics
 */
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['Jonathan', 'Russell', 'Chan']);
// numArray.push('hello') // Error can't assign str to type num
// strArray.push(false) // Error can't assign bool to type string
