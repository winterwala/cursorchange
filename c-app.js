const cursordiv = document.querySelector(".cursor");
//selecting navs
const navsb = document.querySelectorAll(".navbar li");

window.addEventListener("mousemove", cursor );

function cursor(e){
    cursordiv.style.top=e.clientY+"px";
    cursordiv.style.left=e.clientX+"px";
    console.log("The mouse is moving. now test your cursor");
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
