

const fn="mike";
const ln="johnson";
const elements="paragraph, table, list, anchor, image";
const msg="hello john";

let val;
val=fn+" "+ln;
console.log(val);

val=`Hi ${fn} ${ln} good morning`;
console.log(val);

val=fn.charAt(3);

val=fn.substring(2);

val=ln.slice(0,3);

val=elements.split(",");

for(let i=0;i<val.length;i++){
    let elements=val[i];
    if(elements.charAt(0)==" "){
        val[i]=elements.replace(" ","");
        console.log(val[i]);
    }
}

val=msg.includes('hello');