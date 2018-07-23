function Otaku (name, age) {
    this.name = name;
    this.age = age;
    this.habit = 'Games';

}

Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function() 
{
    console.log('I like play ' + this.habit);
}
  




// 参数1是类 后几个参数...
// js 的函数参数异常灵活 数量可以不定 甚至可以不给
// 还有... reset运算符整合起来， 都会跟arguments结合起来
function objectFactory() {
    // console.log(arguments.shift());
    var Constructor = [].shift.call(arguments);
    // console.log(Constructor, arguments);
    var obj = new Object();
    obj.__proto__ = Constructor.prototype;
    // 在apply内部手动指定函数执行时的this
    
    Constructor.apply(obj, arguments);
    return obj;

    // 1. obj __proto__
    // 2. 构造函数上的this 属性
    // 参数要传进去 要赋值 this要指向当前对象


    // console.log(obj);



    // 肢解动作？ 第一项， 其余项就是参数
    // [数组] shift 方法 第一个元素弹出
    // shift 是一个伪元素
}


var person = objectFactory(Otaku, '鸠摩智', 50);
person.sayYourName();






// const person = new Otaku('曾凯', 18);
// console.log(person.sayYourName());

// 1 new 要返回一个新的对象
// 2 具有 访问到Otaky 构造函数里的属性
// 3 访问到Otaku.prototype中的属性或方法
