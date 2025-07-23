let btn=document.getElementById("button_")
let cir=document.getElementById("animatingCircle")
let mic_img=document.getElementById("mic_image")
let listen_animation=document.getElementById("listen")
btn.addEventListener('click',()=>{
    cir.classList.toggle("animate")
    if (btn.innerText === "Start") {
    btn.innerText = "Stop";
    mic_img.style.opacity='0'
    listen_animation.style.opacity='1'
} else {
    btn.innerText = "Start";
    mic_img.style.opacity='1'
    listen_animation.style.opacity='0'
  }
})

