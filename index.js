//Data Types
// const x = 90 ;
// console.log(x);
// console.log(typeof x);

//float
// const result = 5.98;
// console.log(result);
// console.log(typeof results);
// console.log(typeof results);

//string
// const output = "Ram Thapa";
// console.log(output);
// console.log(typeof output);

//boolean
// const ismarried = false;
// console.log(ismarried);
// console.log(typeof married);

//undefined
// let a;
// console.log(a);
// console.log(typeof a);

//null
// const x = null;
// console.log(x);
// console.log(typeof x);

//bigint
// const x = 3557567643n;
// console.log(x);
// console.log(typeof x);

//Symbol
// const result = Symbol("who are you");
// console.log(result);
// console.log(typeof result);

//Object Types
// const obj = {
//     fName:"ram thapa",
//     age:"34",
//     ismarried:"true",
// };
// console.log(obj);
// console.log(typeof obj);

// const arr = [2,3,4,5,6,7,8]
// console.log(arr);
// console.log(typeof arr);

// const date = new Date();
// console.log(date);
// console.log(typeof date);

//Type Conversion
// const x = "123";
// const val = Number(x);
// console.log(val);
// console.log(typeof val);

// const result = "8.98";
// const output = parseFloat(result);
// console.log(output);
// console.log(typeof output);

// const result = 1 + "1";
// console.log(result);
// console.log(typeof result);

// const output = 8 - "4";
// console.log(output);
// console.log(typeof output);

// const x = 123;
// const result = x.toString();
// console.log(result);
// console.log(typeof result);

// const x = 2;
// const y = true;
// console.log(true+x);
// console.log(false+x);

// let x ="";
// let result = Boolean(x);
// console.log(x);
// console.log(typeof x);

// let result = true;
// let output = String(result);
// console.log(output);
// console.log(typeof output);

//  let date = new Date();
//  let result = date.toString();
//  console.log(result);
//  console.log(typeof result);


//String Method
//  const result = "Hello World";

// //Length
//  console.log(result.length);

// //charAt
//  console.log(result.charAt(2));

// //indexof
//  console.log(result.indexOf("0"));

// //lastIndexOf
// console.log(result.lastIndexOf("0"));

// //LoweCase
// console.log(result.toLowerCase());

// //upperCase
// console.log(result.toUpperCase());

// //split
// console.log(result.split(""));

// //includes
// console.log(result.includes("Worlds"));

// //replace
// console.log(result.replace("World","EveryOne"));

// //slice
// console.log(result.slice(1,5));

// //subString
// console.log(result.substring(1,4));

// //trim
// const output = "     k    xa     raja";
// console.log(output.trim());

// //concatination
// console.log(result.concat(" I am Rohan!"));

//Operators
//AssignMent Operators

//  let y = 90;
//  y +=120;
//   console.log(y);

//comparison Operators
// let a = 10;
// let b = 30;
// let c = "10"

// //
// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a !== c);
// console.log(a>b);
// console.log(a<b);
// console.log(a>=10);
// console.log(b<=5);

//Logic Operators
// let x = true;
// let y = false;

// console.log(x && y);
// console.log(x || y);
// console.log(!x);

//String Operators
// const str1 = "Hello";
// const str2 = "World";
// console.log(str1+" "+str2);

//conditional Operators
// let ageVote = 90;
// let result = ageVote >=18 ? "vote" : "not vote";
// console.log(result);

//
// const result = "Hello ROhan";
// const output = "I Love You";
// const Str3 = "lastai garo vayo";

// console.log(`${result} ${output} ${Str3}`);

// const a = 90;
// const b = 30;
// const c = 120;
// const ans = a+b+c;
// console.log(`The sum of three number is: ${ans}`);

//Unary Operators
// const ans = "234";
// const output = -ans;
// console.log(output);
// console.log(typeof output);

// const obj = {
//     Name:"rohan bhujel",
//     age: 22
// }
// delete obj.age
// console.log(obj);

// let x = 85;
// if (x >= 90) {
//     console.log("Grade A+");

// }else if(x >= 80){
//     console.log("grade A");

// }else if (x >= 70 ){
//     console.log("Grde B+");

// }else if (x >= 60){
//     console.log("grade B");

// }else if (x >= 50){
//     console.log("grade c+");

// }else if (x >= 40){
//     console.log("grade c");

// }else {
//     console.log("Failed");
// }

// let email = "bhujelrohan84@gmail.com"
// let pass = "hellorohan"

// if(email === "bhujelrohan84@gmail.com" && pass === "hellorohan"){
//     console.log("Login sucessful");
// else{
//     console.log("invald passport");
// }

// let weather = "spring";
// if(weather === "sunny"){
//     console.log("k xa aja gham lagchata!")

// }else if(weather ==="rainy"){
//     console.log("aja pani parxa")
// } else if(weather === "winter"){
//     console.log("tato luga lagau")

// }else if(weather ==="spring"){
//     console.log("aja weather dami xa")
// }

// let x = 5;
// if(x>=5){
//     console.log("x is greater or equal to 5!");

// }else{
//     console.log("x is not greater or equal to 5!");
// }
    
//Switch (Control Statement)
// let role = "admin";
// switch (role) {
//     case "seller":
//         console.log("seller can add product")
//         break;
//         case "buyer":
//         console.log("buyer can buy product")
//         break;
//         case "admin":
//         console.log("admin can give acuess ")
//         break;
//     default:
//         console.log("Invalid role")
//         break;
// }

// let role = "";
// switch (role) {
//     case "less tha 18":
//         console.log("child")
//         break;
//         case "18-26":
//         console.log("tennage")
//         break;
//         case "26-30":
//         console.log("adult")
//         break;
//         case "30-50":
//         console.log("")
//         break;

//     default:
//         console.log("you are dead")
//         break;
// }

//statusCode 
// let statusCode = 200;
// switch (statusCode) {
//     case 201:
//         console.log("Created");
//         break;
//         case 400:
//         console.log("Bad request");
//         break;
//         case 401:
//         console.log("UnAuthorized");
//         break;
//         case 403:
//         console.log("Forbidden!");
//         break;
//         case 500:
//         console.log("Internal Server Error!");
//         break;
//         case 200:
//         console.log("ok!");
//         break;
//     default:
//         console.log("Invalid StatusCode");
//         break;
// }(

//Date Types
//let statusCode = 200;
// switch ()

//Loop
//for loop

// for(let i = 1; i<=10; i++){
//     console.log(`i love you: ${1}`);
// }

// for(let i =1; i<10; i++){
//     console.log(`3*${i} = ${3*i}`);
// }

//even number
// for(let i = 1; i<20; i++){
//     if(i % 2 === 0){
//         console.log(`the even number is: ${i}`);
//     }
// }

// //odd number
// for(let i = 1; i<20; i++){
//     if(i % 2 !== 0){
//         console.log(`the odd number is: ${i}`);
//     }
// }

//while loop 
// let i =0;
// while(i <=10){
//     console.log("Hello world" + i);
//     i++;
// }

//do while
// let i=1;
// do {
//     console.log("Hello World");
// }while(i<=10);

//Arry
// let result = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < result.length; i++){
//     sum+= result[i];
// }
// console.log(`The sum of Arr is ; ${sum}`);

//Arraay Methods
//  let arr = [4, 5, 6, 7, 8, 2, 3, 4];
// //length;
// console.log(arr.length);
// //push 
// arr.push(12)
// console.log(arr);

//pop

// arr.push();
// console.log(arr);

//sift
// arr.shift();
//     console.log(arr);

// arr.unshift(15);
// console.log(arr);

//splice
// arr.splice(1, 4);
// console.log(arr);

// let result = ["Javascript", "is", "Funny", "language"]
// console.log(result.join("-"));

//slice
// let result = arr.slice(1,4);
// console.log(result);

// let result = arr.includes(4);
// console.log(result);

// arr
// let result = arr.indexOf(4);
// console.log(result);

// let result = arr.lastIndexOf(4);
// console.log(result);

//concat
// console.log(arr.concat("hello world"));

// let arr = [];
// let sum = 0;

// for (let i = 1 ; i<=10; i++ ) { 
//     arr.push(i);
// }

// console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// let result = sum * 2;

// console.log(`The Sum of arr is ; ${sum}`);
// console.log(`The ans is: ${result}`);

//object
// const person = {
//     firstName: "rohan",
//     lastName:"bhujel",
//     age:30,
//     job:"developer",
//     isMarried: false,
//     address: {
//         strret: "dilibazzar",
//         city: "kahtmandu",
//         country:"Nepal",
//     },

//     greet: function () {
//         console.log(
//             `Hello my name is:${this.firstName}.And i am: ${this.age} years old`
//         );
//     }
// };

// //Destructure
// const{
//     firstName,
//     lastName,
//     age,
//     job,
//     isMarried,
//      address:{strret, city, country},
// } = person;

// console.log(firstName, lastName, age, job, isMarried, strret, city, country);
// person.greet();

//Function
// function myFunc(a,b){
//     return a + b ;
//     console.log("Hey function are you there");
// }
// let result = myFunc(8, 9);
// console.log(result);

// function Circle(radius){
//     return Math.PI * radius * radius;
// }
// let result = Circle(5);
// console.log(`The area of circle is: ${result}`);

// function Greet(name, age, education){
//     console.log(`Hello my name is:${name}.I am: ${age}years old. And  i have complete my bacholer in : ${education} from college. `);
// }
// Greet("Rohan bhujel", 22,"Bca (hons computing");

//console.log()
//alert
//prompt

// function myFunc(){
//     let a = prompt("entery any number");
//     let b = prompt("entery any number");
//     let result = Number(a) + Number(b);
//     if (result) {
//         alert(`The Sum of two number is : ${result}`);
//     }
// }

// myFunc();

//Data Types
//CalculatingCartValue

// function CalculateTotal(cartItems, taxRate){
//  let total = 0;
//  for(let i = 0; i<cartItems.length; i++){
//     total += cartItems[i].price * cartItems[i].quantity;
//  }
//  total +=total * taxRate;
//  return total;
// }
// let cart = [
//     {name: "shoes", price:8000,quantity:1},
//     {name: "air force 1",price:6000,quantity:2},
// ]


// let ans = CalculateTotal(cart,0.02)
// console.log(`Your full and final payment is: ${ans}`);

//Scoping;
// var x = 100;
// let ans = 80;
// const y = 20;

// function myFunc() {
//     console.log(x);
//     console.log(y);
//     console.log(ans);
    
// }
// myFunc();

// function myFunc(){
// var x =90;
// let y = 80;
// const z = 80;

// console.log(x);
// console.log(y);
// console.log(z);
// }
// myFunc();

function myFunc() {
    
    if(true){
    var x = 90;
    let y = 80;
    const z = 60;
    console.log(y);
    }
    console.log(x);
}
myFunc();