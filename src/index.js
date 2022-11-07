let images = [
  '../assets/images/foto-2.jpg',
  '../assets/images/foto-3.jpg',
  '../assets/images/foto-4.jpg',
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
