/* Tab 1: Slides */

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



/* Tab 4: Video Player */

var video = document.getElementById("videoPlayer");
var test = document.getElementById("test");
function play() {
  if (test.innerHTML === "Play") {
    video.play();
    test.innerHTML = "Pause";
  }     
  else if (test.innerHTML === "Pause") {
    video.pause();
    test.innerHTML = "Play";
  }
}
function restart() {
  console.log("wow!");
   video.load();
}
function forward(){
  video.currentTime += 10;
}
function rewind(){
  video.currentTime += -10;
}


/* Tab 5: Form */

let data = [];
const add = (ev)=>{
  ev.preventDefault();
  let input = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    address: document.getElementById('address').value
  }
  data.push(input);
  let pre = document.querySelector('#msg pre');
  pre.textContent = '\n' + JSON.stringify(data, '\t', 3);
  localStorage.setItem('input', JSON.stringify(data) );
}
  document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('verify').addEventListener('click', add);
});
