

let data={
    title: "angular",
    body: "popular lang",
    userId: 1
}
let data2={
    title: "web D",
    body: "web development",
    userId: 2
}
fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    body: JSON.stringify(data),
    headers: {"Content-type": "application/json; charset-UTF-8"}
})
.then(res=>res.json())
.then(json=>console.log(json))
.catch(err=>console.log(err));

async function func2(){
    let res2 = await fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    body: JSON.stringify(data2),
    headers:{"Content-type": "application/json; charset=UTF-8"}
});
let data3=await res2.json();
console.log(data3);
}

func2();