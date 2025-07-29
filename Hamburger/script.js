let icon=document.getElementById("icon");
let first=document.getElementById("first");
let second=document.getElementById("second");
let third=document.getElementById("third");
let sidebar=document.getElementById("sidebar");
let opened=false;

icon.addEventListener("click",()=>{
    if(opened==false){
        first.style.transform = "rotate(45deg)";
        second.style.opacity = "0";
        third.style.transform = "rotate(-45deg)";
        sidebar.style.transform = "scaleX(1)";
        opened=true;
    }
    else{
        first.style.transform = "rotate(0deg)";
        second.style.opacity = "1";
        third.style.transform = "rotate(0deg)";
        sidebar.style.transform = "scaleX(0)";
        opened=false;

    }
})