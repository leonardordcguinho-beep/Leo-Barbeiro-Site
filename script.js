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

});