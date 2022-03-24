/*Prikazuje i sakriva navigaciju na telefonu*/
const phoneNav=document.getElementById('phone-nav').addEventListener('click', ()=>{
  const element = document.getElementById("meny");
  if (element.style.display === "flex") {
    element.style.display = "none";
  } else {
    element.style.display = "flex";
  }
}); 

//ovo fraca flex, sprecava da bude neprikazan meni nakon promene velicine ekrana na desktopu
 window.addEventListener('resize', ()=>{
  const element = document.getElementById("meny");
     if(window.innerHeight>650){
      element.style.display = "flex";
    }
 })
 
  /*Navigacija ide gore dole...*/
 let pastScroll = window.pageYOffset;
window.onscroll = function() {
  let newScroll = window.pageYOffset;
  if (pastScroll > newScroll) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  pastScroll = newScroll;
}

/* Za godinu u futeru */
let year=new Date().getFullYear();
document.getElementById('year').innerHTML=year;