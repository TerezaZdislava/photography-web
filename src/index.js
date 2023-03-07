let images = [
  '../assets/images/homepage/16.avif',
  '../assets/images/homepage/17.avif',
  '../assets/images/homepage/18.avif',
];
let index = 0;

const imgElement = document.querySelector('#video2');
const container = document.querySelector('#gallery');

function change() {
  // console.log(imgElement);
  imgElement.src = images[index];
  index === 2 ? (index = 0) : index++;
  // console.log('image changed to' + index);
}
window.onload = function () {
  setInterval('change()', 2000);
};
