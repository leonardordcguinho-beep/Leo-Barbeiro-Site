const imagens = document.querySelectorAll(".galeria img");
const lightbox = document.getElementById("lightbox");
const imgExpandida = document.getElementById("imgExpandida");
const fechar = document.querySelector(".fechar");

imagens.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        imgExpandida.src = img.src;
    });
});

fechar.onclick = () => {
    lightbox.style.display = "none";
};

lightbox.onclick = (e) => {
    if(e.target === lightbox){
        lightbox.style.display = "none";
    }
};// MENU AO ROLAR

const header=document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("ativo");

}else{

header.classList.remove("ativo");

}

});

// MENU CELULAR

const botao=document.getElementById("menuMobile");

const menu=document.getElementById("menu");

botao.addEventListener("click",()=>{

menu.classList.toggle("abrir");

});const voltarTopo = document.getElementById("voltarTopo");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        voltarTopo.style.display = "block";
    } else {
        voltarTopo.style.display = "none";
    }

});

voltarTopo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.classList.add("esconder");

},1200);

});// Efeito Parallax Premium

const banner = document.querySelector(".banner");

window.addEventListener("scroll", () => {

    const y = window.pageYOffset;

    banner.style.backgroundPosition = `center ${y * 0.35}px`;

});const menu = document.querySelector("header");

document.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

menu.style.backgroundPosition=`${x*100}% ${y*100}%`;

menu.style.transform=
`translateX(-50%) rotateX(${(0.5-y)*2}deg)
rotateY(${(x-0.5)*2}deg)`;

});const header = document.querySelector("header");

document.addEventListener("mousemove", (e) => {

    const rect = header.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    header.style.setProperty("--mouse-x", `${x}px`);
    header.style.setProperty("--mouse-y", `${y}px`);

});