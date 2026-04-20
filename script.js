const texts = ["Web Developer", "UI Designer", "Freelancer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
  if(count === texts.length){
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if(letter.length === currentText.length){
    count++;
    index = 0;
    setTimeout(type, 1200);
  } else {
    setTimeout(type, 120);
  }
})();
window.addEventListener("scroll",()=>{
  let winScroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progress").style.width = scrolled + "%";
});
// Scroll Progress Bar
const progress = document.getElementById("progress");
window.addEventListener("scroll",()=>{
  let height = document.documentElement.scrollHeight - window.innerHeight;
  let scrollTop = document.documentElement.scrollTop;
  progress.style.width = (scrollTop/height)*100 + "%";
});