var students = {
    xiaomin: {
        name: "xiaoming",
        grade: 1
    },
    teemo: {
        name: "teemo",
        grade: 3
    }
}

students = JSON.stringify(students); //将JSON转为字符串存到变量里
console.log(students);
localStorage.setItem("students", students);//将变量存到localStorage里

var newStudents = localStorage.getItem("students");
newStudents = JSON.parse(students); //转为JSON
console.log(newStudents); // 打印出原先对象
