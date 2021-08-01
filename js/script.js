$(document).ready(function() {});

function calculate() {
    var crustSize = document.querySelector('input[name="crust"]:checked');
    var crustType = document.querySelector('input[name="crust-type"]:checked');
    var topping = document.querySelector('input[name="toppings"]:checked');
    var quantity = document.getElementById("number").value;
    var delivery = document.querySelector('input[name="delivery"]:checked');
    var crustTypeA = parseInt(crustType.value);
    var crustSizeA = parseInt(crustSize.value);
    var toppingA = parseInt(topping.value);
    var quantity = parseInt(quantity);
    var deliveryA = parseInt(delivery.value);
    var total = (crustSizeA + crustTypeA + toppingA + deliveryA) * quantity;
    var totalIndividualDisplay = crustSizeA + crustTypeA + toppingA + deliveryA;
    document.getElementById("total").innerHTML = "Your bill is " + total;
    document.getElementById("details").innerHTML = "Your order summary:";
    document.getElementById("size").innerHTML = "Pizza size: " + crustSize.id;
    document.getElementById("type").innerHTML = "With a " + crustType.id;
    document.getElementById("top").innerHTML =
        "With additional toppings " + topping.id;
    document.getElementById("deliveryBill").innerHTML = delivery.id;
    document.getElementById("chargePer").innerHTML =
        "Your charge per pizza " + totalIndividualDisplay;
    document.getElementById("totalA").innerHTML =
        "Your total bill is " + totalIndividualDisplay + " × " + quantity;
    $("#checkout").removeClass("display");
    if (deliveryA === 200) {
        $("#checkout").click(function() {
            window.open("../thankyoupage1/");
            window.location.reload();
        });
    } else {
        $("#checkout").click(function() {
            window.open("../thankyoupage2/");
            window.location.reload();
        });
    }
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