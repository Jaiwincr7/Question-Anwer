const btnp=document.querySelectorAll(".img1")
const btnn=document.querySelectorAll(".img2");
const hr=document.querySelectorAll(".anshr");
const ans=document.querySelectorAll(".ans");
const cont=document.querySelectorAll(".container");
console.log(cont);
btnp[0].addEventListener("click",p1);
function p1(){
    close();
    btnp[0].style.display="none";
    btnn[0].style.display="block";
    hr[0].style.display="block";
    ans[0].style.display="block";
    cont[0].style.height="auto";
}

btnp[1].addEventListener("click",p2);
function p2(){
    close();
    btnp[1].style.display="none";
    btnn[1].style.display="block";
    hr[1].style.display="block";
    ans[1].style.display="block";
    cont[1].style.height="auto";
}

btnp[2].addEventListener("click",p3);
function p3(){
    close();
    btnp[2].style.display="none";
    btnn[2].style.display="block";
    hr[2].style.display="block";
    ans[2].style.display="block";
    cont[2].style.height="auto";
}

btnn[0].addEventListener("click",p11);
function p11(){
    close();
}

btnn[1].addEventListener("click",p22);
function p22(){
    close();
}

btnn[2].addEventListener("click",p33);
function p33(){
    close();
}

function close(){
    for(let i=0;i<btnn.length;i++){
        cont[i].style.height="60px";
        btnp[i].style.display="block";
        btnn[i].style.display="none";
        hr[i].style.display="none";
        ans[i].style.display="none";
    }
}