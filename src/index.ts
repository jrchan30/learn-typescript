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
