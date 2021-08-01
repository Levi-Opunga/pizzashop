$(document).ready(function() {});

function calculate() {
    var crustType = document.querySelector(
        'input[name="crust-type"]:checked'
    ).value;
    var crustSize = document.querySelector('input[name="crust"]:checked').value;
    var toppingA = document.querySelector(
        'input[name="toppings1"]:checked'
    ).value;
    var toppingB = document.querySelector(
        'input[name="toppings2"]:checked'
    ).value;
    var toppingC = document.querySelector(
        'input[name="toppings3"]:checked'
    ).value;
    var toppingD = document.querySelector(
        'input[name="toppings4"]:checked'
    ).value;
    var toppingE = document.querySelector(
        'input[name="toppings5"]:checked'
    ).value;
    var toppingE = document.querySelector(
        'input[name="toppings6"]:checked'
    ).value;
    var toppingF = document.querySelector(
        'input[name="toppings7"]:checked'
    ).value;
    var quantity = document.getElementById("number").value;
    crustType = parseInt(crustType);
    crustSize = parseInt(crustSize);
    topping = parseInt(topping);
    quantity = parseInt(quantity);
    var total = (crustSize + crustType + topping) * quantity;
    document.getElementById("total").innerHTML = "Your bill is " + total;
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}