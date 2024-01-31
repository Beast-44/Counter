//let age=50;
//let price=34.99;
//let gpa=2.1;
//console.log(`You are ${age} years old.`);
//console.log(`the price is ${price}`);
//console.log(`your gpa is ${gpa}`);
//console.log(typeof gpa);
//let FirstName= "Majith";
//let LastName = "Mohammed";
//let email = "majith@gmail.com";
//console.log(`My name is ${FirstName}`);
//console.log(`my email is ${email}`); 
//console.log(typeof FirstName);

//let fullName="mohammed majjith";
//let age=20;
//let food = "pizza";
//let hobby = "ridding bicycle";
//document.getElementById("p1").textContent=`your name is ${fullName}`;
//document.getElementById("p2").textContent=`your age is ${age} years old`;
//document.getElementById("p1").textContent=`your name is ${fullName}`;
//document.getElementById("p2").textContent= `you are ${age} years old`;
///document.getElementById("p3").textContent=`your favourite fodd is ${food}`;
//document.getElementById("p4").textContent=`your hobby is ${hobby}`;
//let students = 30;//
//students = students * 1;
//students=students /2;
//students+=1;
//students-=1;
//students**=2;
//console.log(students)

//let result = 12%5+8/2;
//console.log(result);
//let username;
//username = window.prompt("whats your username?")
//console.log(username);
//let username;
//document.getElementById("submit").onclick = function(){
  //  username = document.getElementById("mytext").value;
   // document.getElementById("myh1").textContent = `${username}`;
const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countlabel = document.getElementById("countlabel");
let count = 0;
increasebtn.onclick = function(){
    count++;
    countlabel.textContent=count;
}
decreasebtn.onclick = function(){
    count--;
    countlabel.textContent=count;
}
resetbtn.onclick =function(){
    count = 0;
    countlabel.textContent = count;
}