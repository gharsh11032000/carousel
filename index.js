// Import stylesheets
import './style.css';

// Javascript code!
const imageContainer = document.querySelector('.image_container');
const images = document.querySelectorAll('.image');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

let index = 0;
let timeInterval = 2000;

let interval = setInterval(run, timeInterval);

// Run
function run() {
  index++;
  changeImage();
}

// Slide the Image
function changeImage() {
  if (index > images.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }

  imageContainer.style.transform = `translateX(${-index * 400}px)`;
}

// Reset the interval
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, timeInterval);
}

// Click right btn to slide left
function slideLeft() {
  index++;
  resetInterval();
  changeImage();
}

// Click left btn to slide right
function slideRight() {
  index--;
  resetInterval();
  changeImage();
}

// Event Listners
rightBtn.addEventListener('click', slideLeft);
leftBtn.addEventListener('click', slideRight);
