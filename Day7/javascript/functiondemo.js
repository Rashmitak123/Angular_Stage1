
function subtract(a, b){
    let sub=a-b;
    console.log(`subtraction ${sub}`);
}
subtract(8,2);

let product=function(x,y){
    return x*y;
}
console.log(`product ${product(4,5)}`);

switch (new Date().getDay()){
    case 0:
        console.log("Today is sunday");
        break;
    case 1:
        console.log("Today is monday");
        break;
    case 2:
        console.log("Today is tuesday");
        break;
    case 3:
        console.log("Today is wednesday");
        break; 
    case 4:
        console.log("Today is thursday");
        break;
    case 5:
        console.log("Today is friday");
        break;
    default:
        console.log("Today is saturday");
        break;
    }