const btnMenu = document.querySelector(".btn-menu");
const btnMenuClose = document.querySelector(".btn-menu-close");
const menu = document.querySelector(".menu");

function menuMove() {
  menu.classList.toggle("menu-open");
}

btnMenu.addEventListener("click", menuMove);
btnMenuClose.addEventListener("click", menuMove);


const left = document.querySelector(".arrow-left")
const right = document.querySelector(".arrow-right")
const carouselItem = document.querySelectorAll(".carousel-item")

 left.addEventListener("click", anterior )
right.addEventListener("click", proximo )

var indexImgAtual=0
var tamanhoArray = carouselItem.length


function anterior(){
  carouselItem[indexImgAtual].classList.add("none")
 indexImgAtual++

  if(indexImgAtual>=tamanhoArray){
    indexImgAtual=0
  }
  carouselItem[indexImgAtual].classList.remove("none")
}

function proximo(){
  carouselItem[indexImgAtual].classList.add("none")
  indexImgAtual++

  if(indexImgAtual>=tamanhoArray){
    indexImgAtual=0
  }
  carouselItem[indexImgAtual].classList.remove("none")
}



