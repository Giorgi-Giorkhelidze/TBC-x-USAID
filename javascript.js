//header transparent
const header = document.getElementById("header-coin");

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  header.style.backgroundColor = `rgb(26, 30, 31, ${Math.min(
    0.8,
    scrollPosition / 200
  )})`;

  if (scrollPosition === 0) {
    header.style.backgroundColor = "rgb(26, 30, 31)";
  }
});
//slider
var slider = document.getElementById("mySlider");
var radios = document.querySelectorAll('input[name="slider-radio"]');
var currentIndex = 0;

function moveSlider(index) {
  currentIndex = index;
  var newPosition = -index * 100;
  slider.style.transform = "translateX(" + newPosition + "%)";
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % radios.length;
  radios[currentIndex].checked = true;
  moveSlider(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + radios.length) % radios.length;
  radios[currentIndex].checked = true;
  moveSlider(currentIndex);
}

setInterval(nextSlide, 3000);

radios.forEach(function (radio, index) {
  radio.addEventListener("change", function () {
    moveSlider(index);
  });
});
//accordion
const accordion = document.getElementsByClassName("contentBx");
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
