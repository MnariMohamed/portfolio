let slideIndex = [1, 1, 1, 1];
let slideId = [];

function initSlides() {
  for (let index = 0; index < slideIndex.length; index++) {
    slideId.push("mySlides" + (index + 1));
  }
}
initSlides();


for (let index = 0; index < slideId.length; index++) {
  showSlides(1, index);
}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) { slideIndex[no] = 1 }
  if (n < 1) { slideIndex[no] = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}