let slideIndex = 0;
setTimeout(showSlides,4000);

function showSlides (){
  let slides = document.querySelectorAll(".mainSlider_img");
  let slidesContainer = document.getElementById("mainSlider");

  slides.forEach((slide) => {
    slide.style.transform = 'none';
  })
  slides.forEach((slide) => {
    slide.style.transition = 'all 3s ease-out';
  });
  slides.forEach((slide) => {
    slide.style.transform = 'translateX(-100%)';
  })

  //slidesContainer.appendChild(slides[0]);
  setInterval(showSlides, 4000); 
}


