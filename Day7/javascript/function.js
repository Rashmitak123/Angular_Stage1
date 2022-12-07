

function greeting(fn, msg){
    console.log(`${msg} to ${fn}`);
}

greeting('john', 'hello');


function greeting1(fn, msg){
    console.log(`${msg} to ${fn}`);
}
greeting1();



function greeting2(fn='amit', msg=
'gm'){
    console.log(`${msg} to ${fn}`);
}
greeting2();

//func expression means we can assign a func to a variable
let sq=function(x){
    return x*2;
}

let sum=function(x,y){
    return x+y;
}

console.log(sum(4,5));
console.log(sq(sum(5,4)));