// function listen(click, handler) {

// function handler() {
//     setTimeout(request, 500);
// }
// function request() {
//     ajax("http://some.url.1", response);
// }
// function response(text) {
//     if (text == "hello") {
//         handler();
//     }
//     else if(text == "world") {
//         request();
//     }
// }
// }

// function addNumber(x, y) {
//     if(typeof x !="number" || typeof y != "number")
// {
//     throw Error("Bad parameters");
// }    return x+y;
// }
// console.log(addNumber(21,21));
// console.log(addNumber(21, '21'));

// function add(xPromise,yPromise) {
//     return Promise.all( [xPromise,yPromise] )
//     .then( function(values) {
//         return values[0] + values[1];
//     } );
// }
// add( fetchX(), fetchY() )
// .then( function(sum){
//     console.log(sum);
// } );
// 'use strict'
// function foo() {
//     this.a = 10;
//     console.log(this);
// }
// foo();
// console.log(window.a);
// var obj = new foo();
// console.log(obj.a);

// var x = 10;
// var obj = {
//     x: 20,
//     f: function () { console.log(this.x); }
// };
// var bar = obj.f;
// var obj2 = {
//     x: 30,
//     f: obj.f
// }
// obj.f();
// bar();
// obj2.f();

// foo(x) {
//     //开始做点可能耗时的工作
// }
// foo(42)
// on (foo "completion") {
//         //可以进行下一步了
// }
// on(foo "error") {
//     //啊， foo(..) 中出错了
// }

// function foo(x) {
//     //开始做点可能耗时的工作
//     // 构造一个listener事件通知处理对象来返回
//     return listener;
// }
// var evt = foo(42);
// evt.on("completion", function() {
//     //可以进行下一步了
// });
// evt.on("error", function() {
//     //啊 foo(..)中出错了
// });




