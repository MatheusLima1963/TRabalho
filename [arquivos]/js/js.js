const navbar_btt = document.getElementsByClassName("navbar_button")[0];
const navbar_link = document.getElementsByClassName("navbar_link")[0];

const navbar = document.getElementsByClassName("navbar")[0];

function toggle_menu(event){
 
    if(event.type == 'touchstart') event.preventDefault();

    navbar_link.classList.toggle('active');
    navbar.classList.toggle('active');
}

navbar_btt.addEventListener('click', toggle_menu);
navbar_btt.addEventListener('touchstart', toggle_menu);


let slideIndex = 1;
showSlides(slideIndex);
  
function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    } 

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}