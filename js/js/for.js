// var arr = ['Bart', 'Lisa', 'Adam'];
// for(i = 0; i<arr.length; i++) {
//     console.log("hello " + arr[i]);
// }

// var a = ['san', 'lily', 'haha' ];
// for(var p in a) {
//     console.log(a[p]);
// }

// var a = new Set ([1, 2, 3, 4, 3]);
// a.add(5);

// console.log(a);
// a.delete(2);
// console.log(a);

// 'use strict';
// var a = [1, 2, 3];
// for (var x of a) {
// }
// console.log(x);

// var a = ['A', 'B', 'C'];
// var s = new Set(['A', 'B', 'C']);
// var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
// for (var x of a) { // 遍历Array
//     console.log(x);
// }
// for (var x of s) { // 遍历Set
//     console.log(x);
// }
// for (var x of m) { // 遍历Map
//     console.log(x[0] + '=' + x[1]);
// }

// var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
// m.forEach(function (value, key, map) {
//     console.log(key);
// });

// function foo(a, b, ...rest) {
//     console.log('a = ' + a);
//     console.log('b = ' + b);
//     console.log(rest);
// }

// foo(1, 2, 3, 4, 5);
// foo(1);

// var array = ["lili", "nana", "sansan"];
// var [x, y, z] = ["lili", "sansan", "nana"];
// console.log("x=" +x+ ",y=" +y+ ",z=" +z);

// function buildDate({ year, month, day, hour = 0, minute = 0, second = 0 }) {
//     return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
// }

// buildDate({ year: 2017, month: 1, day: 1 });

// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: function () {
//         var y = new Date().getFullYear();
//         return y - this.birth;
//     }
// };

// xiaoming.age; // function xiaoming.age()
// // 今年调用是25,明年调用就变成26了
// console.log(xiaoming.age());
// console.log(xiaoming.age(y));

// 'use strict';

// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: function () {
//         function getAgeFromBirth() {
//             var y = new Date().getFullYear();
//             return y - this.birth;
//         }
//         return getAgeFromBirth();
//     }
// };

// console.log(xiaoming.age());

// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: function () {
//         var that = this; // 在方法内部一开始就捕获this
//         function getAgeFromBirth() {
//             var y = new Date().getFullYear();
//             return y - that.birth; // 用that而不是this
//         }
//         return getAgeFromBirth();
//     }
// };

// console.log(xiaoming.age());

// function getAge() {
//     var y = new Date().getFullYear();
//     return y - this.birth;
// }

// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: getAge
// };

// xiaoming.age(); // 25
// getAge.apply(xiaoming, []); 

// Math.max.apply(null, [3, 5, 4]);
// Math.max.call(null, 3, 5, 4); 

// 'use strict';

// var count = 0;
// var oldParseInt = parseInt; // 保存原函数

// parseInt = function () {
//     count += 1;
//     return oldParseInt.apply(null, arguments); // 调用原函数
// };
// parseInt('10');
// parseInt('20');
// parseInt('30');
// parseInt("40");
// console.log('count = ' + count);

// 'use strict';

// function pow(x) {
//     return x * x;
// }
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var results = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
// console.log(results);
// function TS(x) {
//     return parseInt(x);
// }
// var arr = ['1', '2', '3'];
// var r;

// r=arr.map(TS);
// console.log(r);


// var arr = [1, 2, 3, 4 ,7, 9];
// var r = arr.filter(function (x) {
//     return x%2 != 0;
// })
// console.log(r);

// var arr = ['A', 'B', 'C'];
// var r = arr.filter(function (element, index, self) {
//     console.log(element); // 依次打印'A', 'B', 'C'
//     console.log(index); // 依次打印0, 1, 2
//     console.log(self); // self就是变量arr
//     return true;
// });

// 利用filter，可以巧妙地去除Array的重复元素：
// 'use strict';

// var
//     r,
//     arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
// r = arr.filter(function (element, index, self) {
//     return self.indexOf(element) === index;
// });
// console.log(r.toString());
// 去除重复元素依靠的是indexOf总是返回第一个元素的位置，后续的重复元素位置与indexOf返回的位置不相等，因此被filter滤掉了。


// var arr = [1, 3, 4, 7, 9, 34, 22, 11];
// var r;
// r = arr.filter(function(x) {
//     for(let i = 1; i<= sqrt(arr[x]); i++) {
//         if(x % i == 0) {
//            console.log(r);
//         }
//     }
// })

// function lazy_sum(arr) {
//     var sum = function () {
//         return arr.reduce(function (x, y) {
//             return x + y;
//         });
//     }
//     return sum;
// }
// var f = lazy_sum([1,2,4,5,6]);
// console.log(f);

function count() {
    var arr = [];
    for (var i = 1; i <= 3; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

console.log(f1());

console.log(f2());

console.log(f3());

function count() {
    var arr = [];
    for (var i = 1; i <= 3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

console.log(f1());

console.log(f2());

console.log(f3());

'use strict';

function make_pow(n) {
    return function (x) {
        return Math.pow(x, n);
    }
}
// 创建两个新函数:
var pow2 = make_pow(2);
var pow3 = make_pow(3);

console.log(pow2(5)); // 25
console.log(pow3(7)); // 343


(x, y, ...rest) => {
    var i, sum = x + y;
    for (i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}
console.log(sum());


