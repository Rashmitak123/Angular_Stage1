

async function getPost(){
    let res=await fetch('post.json');
    let data= await res.json();
    console.log(data);
}
getPost() 


fetch("post.json")
.then(res=>res.json())
.then(json=>console.log(json))
.catch(err=>console.log(err))