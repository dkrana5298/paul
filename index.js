let slideIndex = 1;
showSlides(slideIndex);
let date=new Date()
console.log(date.toDateString())
console.log(date.toTimeString())
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

var hourCount=document.getElementById('hour');
var minuteCount=document.getElementById('minute')
var secondCount = document.getElementById('second');

var hour=date.getHours();
var minute=date.getMinutes();
var second=date.getSeconds();
var interval;
clearInterval(interval);
interval=setInterval(startTimer, 1000);

function startTimer(){
    second++;
    if(second < 10){
       secondCount.innerHTML= "0" + second;
    }
     if(second >= 10 ){
       secondCount.innerHTML= second;
    }
    if(second > 60) {
        minute++;
        minuteCount.innerHTML="0" + minute;
        second=0;
        secondCount.innerHTML= "0" + second;
    }
    if(minute > 9){
        minuteCount.innerHTML=minute;
    }
    if(minute < 10){
      minuteCount.innerHTML="0" + minute ;
    }
    if(minute > 60){
        hour++;
        hourCount.innerHTML="0" + hour;
        minute=0;
        minuteCount.innerHTML= "0" + minute;
     }
    //  if(hour > 9){
    //     hourCount.innerHTML= hour;
    //  }
     if(hour < 10){
      hourCount.innerHTML= "0" + hour;
     }
      if(11 <= hour <= 12){
        hourCount.innerHTML= hour;
      }
     if(hour > 12){
      hourCount.innerHTML= "0" + hour - 12;
     }

  }

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
// password view function
function PasswordViwe(){
    var pass=document.getElementById('pswd');
    if (pass.type === "password"){
     pass.type="text"
    }
    else {
      pass.type="password"
    }
 } 
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
}