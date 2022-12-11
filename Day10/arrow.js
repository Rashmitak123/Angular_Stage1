

let add=(x,y,z)=>x+y+z;
console.log(add(4,5,6));

let nums=[4,5,6,7,2,3,1];
nums.sort((a,b)=>b-a);
console.log(nums);

console.log(nums.sort());

let names=['rashmi', 'rahul', 'divya', 'suraj', 'kamal'];
let lengths=names.map(name=>name.length);
console.log(lengths);


function sum(...args){
    let total=0;
    for(const a of args){
        total+=a;
    }
    return total;
}

console.log("sum");
console.log(sum(3,4));
console.log(sum(3,4,5,6));

const n1=[1,2,3];
const n2=[4,5,6];
const n3=[...n1,...n2];
console.log(n3);


