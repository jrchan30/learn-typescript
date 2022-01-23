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
