let str="rash$mita";
try{
    if(str.includes('$')){
        throw "invalid String";
    }
    console.log("valid string");
}catch(err){
    console.log("please enter a valid string");
}