let val;
const today=new Date();

let impDate=new Date("2000-09-22");

console.log(impDate.getDate());
console.log(impDate.getDay());
console.log(impDate.getMonth());
console.log(impDate.getFullYear());
//console.log(impDate.getHour());
console.log(impDate.getMinutes());

console.log(impDate);
console.log(today);

impDate.setDate(2);
impDate.setMonth(10);
impDate.setFullYear(2000);

console.log(impDate);