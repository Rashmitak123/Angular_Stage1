
for(i=2; i<=20; i++){
    var isPrime=false;
    for(j=2; j<i; j++){
        if(i%j===0){
        isPrime=true;
    }
}
if(isPrime===false){
    console.log(i);
}
}