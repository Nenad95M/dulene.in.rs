import {homepageLightbox} from "./lightbox.js";
import { weatherForcast } from "./vremenskaPrognoza.js";
function navigationInteractivity(){
/*Prikazuje i sakriva navigaciju na telefonu*/
const phoneNav = document
  .getElementById("phone-nav")
  .addEventListener("click", () => {
    const element = document.getElementById("meny");
    if (element.style.display === "flex") {
      element.style.display = "none";
    } else {
      element.style.display = "flex";
    }
  });

//ovo fraca flex, sprecava da bude neprikazan meni nakon promene velicine ekrana na desktopu
window.addEventListener("resize", () => {
  const element = document.getElementById("meny");
  console.log(window.innerWidth);
  if (window.innerWidth > 650) {
    element.style.display = "flex";
  }
});

/*Navigacija ide gore dole...*/
let pastScroll = window.pageYOffset;
window.onscroll = function () {
  let newScroll = window.pageYOffset;
  if (pastScroll > newScroll) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  pastScroll = newScroll;
};
}

function footer(){
/* Za godinu u futeru */
let year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;
}

window.addEventListener('load', (event) => {
  navigationInteractivity();
  footer();
  //ucitavam module ako je odgovarajuca strana
if (document.getElementById('index-gallery')){
  homepageLightbox();
}
if(document.getElementById('currentWeather')){
  weatherForcast();
}
});
