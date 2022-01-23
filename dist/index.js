"use strict";
/**
 * Basic Types
 */
let id = 5;
let company = 'Russell Chan';
let isPublished = true;
let x = 'Hello';
// x = false // Error
let age;
let ids = [1, 2, 3, 4];
// ids.push('Hello') // Error
let arr = [1, 'Str', false];
/**
 * Tuple
 */
let person = [1, 'Russell', false];
// Tuple Array
let employee;
employee = [
    [1, 'test'],
    [2, 'test2'],
    [3, 'test3'],
];
/**
 * Union
 */
let pid;
pid = 20;
pid = 'hello';
/**
 * Enum
 */
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); // 1
console.log(Direction1.Left); // 3
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up); // Up
const user = {
    id: 1,
    name: 'Russell',
};
const tempUser = {
    address: 'Jln. Kelapa Gading',
    umur: 21,
};
/**
 * Type Assertion
 */
let cid = 1;
// let customerId = <number>cid // Method 1
let customerId = cid; // Method 2
let customerId2 = cid;
// customerId2 = "string" // Error
/**
 * Functions
 */
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// console.log(addNum("1", "3")) // Error
// Void
function log(message) {
    console.log(message);
}
log('Hello');
// log(true) // Error
