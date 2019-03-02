//문법
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

//var a, b, rest;
// [a, b] = [10, 20];
// console.log(a); // 10
// console.log(b); // 20
//
// //...rest 30,40,50을 가지고 있는 배열
// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // [30, 40, 50]



///////////////*JSON 객체*/////////////////
// ({ a, b } = { a: 10, b: 20 });
// console.log(a); // 10
// console.log(b); // 20
//
//
// // Stage 4(finished) proposal
// ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // {c: 30, d: 40}



///////////////*Default values : es6에서 새로나온 문법, 디폴트 매개변수 설정법*///////////////
var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7