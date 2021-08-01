$(document).ready(function() {});

function calculate() {
    var crustSize = document.querySelector('input[name="crust"]:checked').value;
    var crustType = document.querySelector(
        'input[name="crust-type"]:checked'
    ).value;
    var topping = document.querySelector('input[name="toppings"]:checked').value;
    var quantity = document.getElementById("number").value;
    var delivery = document.querySelector('input[name="delivery"]:checked').value;
    crustType = parseInt(crustType);
    crustSize = parseInt(crustSize);
    topping = parseInt(topping);
    quantity = parseInt(quantity);
    delivery = parseInt(delivery);
    var total = (crustSize + crustType + topping + delivery) * quantity;
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