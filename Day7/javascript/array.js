

const num1=[1,2,3,4,5];
const num2=new Array(34,45,56,67,45,88);
const fruits=["apples", "pears", "guavas", "oranges"];
const mixed=[null, true, 121, 344, "hi", new Date()];

let val;
val=mixed.length;
console.log(`lenght of mixed is ${val}`);

val=Array.isArray(num2);
console.log(`nums is an array -- ${val}`);

val=num1.indexOf(100);
console.log(val);

num1.push(100);

num1.unshift(250);

num1.pop();

num1.shift();

num1.reverse();

num1.splice(1,2);

val=num1.concat(num2);

val2=val.sort();

val3=val.sort(function(x,y){
    return y-x;
});

num1.forEach(e=>{
    console.log(e);
})

function lessthan50(num){
    return num<50;
}

function isEven(num){
    return num%2==0;
}

val=num1.find(lessthan50);
