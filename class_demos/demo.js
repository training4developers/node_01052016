var x = 3;
x
x = 5;
x
console.log(x);
typeof x
x = "Eric";
typeof x
function doSomething() {
console.dir(arguments);
}
doSomething(1,2,3);
function doSomething(a,b,c) {
console.dir(arguments);
console.dir(a,b,c);
}
doSomething(1,2,3);
function doSomething(a,b,c) {
console.dir(arguments);
console.log(a,b,c);
}
doSomething(1,2,3);
doSomething(1,{ id: 23 },3);
