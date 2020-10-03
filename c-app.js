const cursordiv = document.querySelector(".cursor");
const navs = document.querySelectorAll(".navbar li");

window.addEventListener("mousemove", cursor );

function cursor(e){
    cursordiv.style.top=e.screenY+"px";
    cursordiv.style.left=e.screenX+"px";
}

navs.forEach(link=>{
    link.addEventListener("mouseover", (ev) => {
        cursordiv.classList.add("grow");
        link.style.color="pink"
    });
    link.addEventListener("mouseleave", (ev) =>{
        cursordiv.classList.remove("grow");
        link.style.color="black"
    })

});