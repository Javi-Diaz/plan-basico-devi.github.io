// EVENTO DEL MENU
let btnMenu = document.querySelector("#btnMenu");
let menu = document.querySelector("#menu");

btnMenu.addEventListener("click",()=>{
    menu.classList.toggle("header-nav-open");

    
});

// ANIMACION ACTIVE DEL NAV
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY; // cantidad de pixeles que se desplazan cuando se hace scroll
        let offset = sec.offsetTop - 150; // cantidad de pixeles que retorna la distancia del elemento actual respecto al borde superior del nodo offsetParent
        let height = sec.offsetHeight; // la altura de un elemento, incluido el acolchado vertical y los bordes, como un número entero
        let id = sec.getAttribute("id");
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove("active");
                document.querySelector(`header nav a[href*=`+ id + `]`).classList.add("active");
            })
        }
    })
}
