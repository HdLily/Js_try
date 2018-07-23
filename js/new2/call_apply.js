var obj1 = {
    name: 'sven'
}

var obj2 = {
    name: 'anne'
}

// window.name = 'window';

var getName = function () {
    // 函数this 由运行时决定 运行时的函数调用方式来决定
    // 普通函数的this指向window, 严格模式下是undefined
    console.log(`Hi I am ${this.name}`);
}
// 普通函数
// this 可以被指定
getName.call(obj1);
getName.apply(obj1);

var func = function(a,b,c) {
    console.log([a, b, c]);
}
func.apply(null, [1,3,3]);
func.call(null, 1, 2, 3);
