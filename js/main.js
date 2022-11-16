let slideIndex = 0;
let slideIndexRegion = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mainSlider_img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex >= slides.length) {slideIndex = 0}
  slides[slideIndex].style.display = "block";
  slideIndex++;
  setTimeout(showSlides, 5000); 
}

function showSlidesRegion(){
  let i;
  let slides = document.querySelectorAll(".introductionImg img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndexRegion >= slides.length) {slideIndexRegion = 0}
  slides[slideIndexRegion].style.display = "block";
  slideIndexRegion++;
}

let slideregion = document.querySelector(".introductionImg");
let firstSliderImg = document.querySelector(".introductionImg img");
firstSliderImg.style.display="block";
slideregion.addEventListener("click",showSlidesRegion);


// season

let seasonTitleIndex = 0;
function seasonTitleSliderNext(){
  let seasonTitle = document.querySelectorAll(".seasonTitle h1");
  seasonTitle.forEach((title) => {
    title.style.display='none';
  })
  seasonTitleIndex++;
  if(seasonTitleIndex >= seasonTitle.length){
    seasonTitleIndex = 0;
  }
  seasonTitle[seasonTitleIndex].style.display="block";
  seasonImgSlider();
}
function seasonTitleSliderPrev(){
  let seasonTitle = document.querySelectorAll(".seasonTitle h1");
  seasonTitle.forEach((title) => {
    title.style.display='none';
  })
  seasonTitleIndex--;
  if(seasonTitleIndex < 0){
    seasonTitleIndex = seasonTitle.length-1;
  }
  seasonTitle[seasonTitleIndex].style.display="block";
  seasonImgSlider();
}

let arrowNext = document.querySelector(".arrow-next");
let arrowPrev = document.querySelector(".arrow-prev");
arrowNext.addEventListener("click" , seasonTitleSliderNext);
arrowPrev.addEventListener("click",seasonTitleSliderPrev);
let firstSeason = document.querySelector(".seasonTitle h1");
let firstSeasonWrapper = document.querySelector(".seasonWrapper");
firstSeason.style.display="block";
firstSeasonWrapper.style.display="block";

function seasonImgSlider(){
  let seasonWrapper = document.querySelectorAll(".seasonWrapper");
  seasonWrapper.forEach((wrapper) => {
    wrapper.style.display='none';
  })
  seasonWrapper[seasonTitleIndex].style.display="block";
}