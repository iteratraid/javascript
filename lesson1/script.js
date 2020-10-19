'use strict';

//console.log(leftBorderWidth);
var leftBorderWidth = 1;
{
    let second = 2;
}
const pi = 3.14;

//console.log(4/0);
//console.log('string'*9);

let persone = {
   name: "John",
   age: 25,
   isMarried: false
}
console.log(persone["name"]);

let arr = ['plum.png','orange.jpg','apple.bmp'];

console.log(arr[0]);

//alert("Hello word");

/*let answer = confirm("Are you here?");
console.log(answer);*/

let answer = +prompt("Are you here?","Да");
console.log(typeof(answer));

console.log("arr"+" - object");

console.log(4 + +" - object");

let incr = 10,
    decr = 10;

 
    console.log(incr++);
    console.log(decr--);

    console.log("2"===2);

    let isChecked = true,
        isClose = false;

        console.log(isChecked || isClose);