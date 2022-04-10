// ---> Primitive types
// To know the type of a JavaScript variable, we can use the typeof operator.

// 1. String - It represents a series of characters and is written with quotes. A string can be represented using a single or a double quote.
var str = "Vivek Singh Bisht"; //using double quotes
var str2 = 'John Doe'; //using single quotes

// 2. Number - It represents a number and can be written with or without decimals.
var x = 3; //without decimal
var y = 3.6; //with decimal

// 3. BigInt - This data type is used to store numbers which are above the limitation of the Number data type. It can store large integers and is represented by adding “n” to an integer literal.
var bigInteger = 234567890123456789012345678901234567890;

// 4. Boolean - It represents a logical entity and can have only two values : true or false. Booleans are generally used for conditional testing.
var a = 2;
var b = 3;
var c = 2;
console.log(a == b) // returns false
console.log(a == c) //returns true

// 5. Undefined - When a variable is declared but not assigned, it has the value of undefined and it’s type is also undefined.
var x1; // value of x1 is undefined
var y1 = undefined; // we can also set the value of a variable as undefined
console.log(x1);
console.log(y1);

// 6. Null - It represents a non-existent or a invalid value.
var z = null;

// 7. Symbol - It is a new data type introduced in the ES6 version of javascript. It is used to store an anonymous and unique value.
var symbol1 = Symbol('symbol');
console.log(symbol1);

// 8. typeof of primitive types :
console.log(typeof "John Doe") // Returns "string"
console.log(typeof 3.14) // Returns "number"
console.log(typeof true) // Returns "boolean"
console.log(typeof 234567890123456789012345678901234567890) // Returns bigint
console.log(typeof undefined) // Returns "undefined"
console.log(typeof null) // Returns "object" (kind of a bug in JavaScript)
console.log(typeof Symbol('symbol')) // Returns Symbol

// ---> Non-primitive types
// Primitive data types can store only a single value. To store multiple and complex values, non-primitive data types are used.
// Object - Used to store collection of data.
// Collection of data in key-value pairs

var obj1 = {
    x: 43,
    y: "Hello world!",
    z: function () {
        return this.x;
    }
}
console.log(obj1);
console.log(obj1.z());

// Collection of data as an ordered list

var array1 = [5, "Hello", true, 4.1];
console.log(array1); 

// It is important to remember that any data type that is not primitive data type, is of Object type in javascript.