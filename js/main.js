let slideIndex = 0;
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