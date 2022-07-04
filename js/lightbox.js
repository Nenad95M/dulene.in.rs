export function homepageLightbox(){
//niz slika
const imgArr = document.getElementById('index-gallery').querySelectorAll('img');
const imgArrSrc = Array.from(imgArr);

//lightbox element
const modalPhoto = document.getElementById('modalPhoto');
const lightboxBg = document.getElementById('lightboxBg');
const text = document.getElementById('text');
const close = document.getElementById('close');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
//stejt
const state = {
    lightboxActive: false,
    activeImg: '',
    urlImg: '',
    text: '',
    maxImg:imgArrSrc.length-1,
}
//provera updejt stejta
function checkStateChange() {
    if (state.lightboxActive) {
        lightboxBg.classList.add('active');
        state.urlImg = imgArr[state.activeImg].src.replace('/tmb', '');
        state.text=imgArr[state.activeImg].alt;
        text.textContent = state.text;
        modalPhoto.src = state.urlImg;
    }
    else{
        lightboxBg.classList.remove('active');
    }
}

//Osluskivac za fotografije
imgArr.forEach((img, index) => {
    img.addEventListener('click', (e) => {

        state.lightboxActive = true;
        state.activeImg = index;
        //funkcija proverava da li je doslo do premene stejta i ako jeste vrsi odredjene promene u domu
        checkStateChange();
    })
})
//osluskivac za close btn
close.addEventListener('click', () => {
    state.lightboxActive = false;
    checkStateChange();
});

next.addEventListener('click',()=>{
     let num=state.activeImg+1;
     if(num>=state.maxImg){
        num=state.activeImg=0;
    }
    state.activeImg=num;
    checkStateChange();
})
prev.addEventListener('click',()=>{
    let num=state.activeImg-1;
    if(num<=0){
        num=state.maxImg;
    }
    state.activeImg=num;
    checkStateChange();
})
}


