// Hoisting is a default behaviour of javascript where all the variable and function declarations are moved on top.

a = 1;
console.log('a=' + a);
var a;

// This means that irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.

hoistedFunction();
function hoistedFunction() {
    console.log("hoisted function called.")
}

// Hoisting takes place in the local scope as well
function doSomething() {
    x = 33;
    console.log(x);
    var x;
}
doSomething();

// Variable initializations are not hoisted, only variable declarations are hoisted:
var x2;
console.log(x2); // Outputs "undefined" since the initialization of "x" is not hoisted
x2 = 23;

// To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:
"use strict";
x = 23; // Gives an error since 'x' is not declared
var x; 