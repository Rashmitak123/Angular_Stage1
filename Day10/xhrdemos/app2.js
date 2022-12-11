

let p1=new Promise((resolve, reject)=>{

    let a=5;
    let b=6;
    let c=a+b;

    if(c===5){
            resolve('success')
    }
else{
    reject('failed');
}
});

p1.then((message)=>{console.log(message);})
.catch((message)=>{console.log(message);});






let pro=new Promise((study, play)=>{
    let watchcartoon=true;
    let watchmovie=true;
    let paractice=false;
    if(watchcartoon||watchmovie){
        play('movies');
    }
    else if(paractice){
        study('completed');
    }
});
pro.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);});