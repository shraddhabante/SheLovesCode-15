//display name of a user using closures (returning function from a function): input of name is added by user
// function userName(x) {
//     // var x = document.getElementById('fname').value;
//     function show() {
//         return x;
//     }
//     return show;
// }
// var y = userName(document.getElementById('fname').value);
// y();


//create 2 methods/function in a method/function and return a method/function based on condition and store it outside, in a variable
function calculate() {
    var t = 0;
    function fun1() {
        if (t == 0) {
            return t;
        }
        else (t == 1) 
            return t;
    }
    return fun1;
}
var num = calculate();
console.log(num);


//task
//try call & apply methods on Math Object, Date Object(study)
var numArr = [23, 40, 68, 78, 90];
var minArr = Math.min.apply(null, numArr);
console.log(minArr);

var car = {
    break: function (price) {
        return this.brand + " " + this.color + " " + price;;
    }

};
var anotherCar = {
    brand: "toyota",
    color: "red",
}
var z = car.break.call(anotherCar, 20000);
console.log(z);

//task
//create a University object constructor function
//name, age, marks, city
// create one method
// 5 students want to enroll
//display their data  in UI
function University(name, age, marks, city) {
    this.name = name;
    this.age = age;
    this.marks = marks;
    this.city = city;
}
University.prototype.studentData = function (a) {
    document.getElementById(a+'-student').innerHTML = this.name + " " + this.age + " " + this.marks + " " + this.city;   
    console.log( this.name + " " + this.age + " " + this.marks + " " + this.city);
};

var studentOne = new University("John", 18, 78, "Mumbai");
studentOne.studentData("first");
var studentTwo = new University("Smith", 19, 87, "Pune");
studentTwo.studentData("second");
var studentThree = new University("Alina", 20, 80, "Banglore");
studentThree.studentData("third");
var studentFourth = new University("Alex", 19, 78, "Hydrabad");
studentFourth.studentData("fourth");
var studentFifth = new University("Richa", 20, 90, "Nagpur");
studentFifth.studentData("fifth");
