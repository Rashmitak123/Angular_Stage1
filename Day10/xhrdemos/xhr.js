let btn=document.getElementById("btn");
btn.addEventListener('click', loadData);
function loadData(){
    const xhr=new XMLHttpRequest();
    xhr.open('GET', 'demo.txt', true);
    xhr.onprogress=function(){
        console.log('ready state', xhr.readyState);
    }
    xhr.onload=function(){
        console.log('readyState', xhr.readyState);
        if(this.status===200){
            document.getElementById('output').innerHTML=
                `<h1>${this.responseText}</h1>`;
        }
    }
    xhr.onerror=function(){
        console.log('error');
    }

    xhr.send();
}