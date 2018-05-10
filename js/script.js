//map
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: {lat: 59.9393, lng: 30.322}
	});

	var image = './img/map-marker.png';
	var beachMarker = new google.maps.Marker({
		position: {lat: 59.9387942, lng: 30.3230833},
		map: map,
		icon: image
	});
}


//popup
var btnFeedback = document.querySelector(".btn-feedback");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var nameField = popup.querySelector("[name=feedback-name-field]");
var emailField = popup.querySelector("[name=feedback-email-field]");

btnFeedback.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-feedback-show");
	overlay.classList.add("modal-overlay-show");
	nameField.focus();
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-feedback-show");
	overlay.classList.remove("modal-overlay-show");
	popup.classList.remove("modal-feedback-error");
});

form.addEventListener("submit", function (evt) {
	if (!nameField.value || !emailField.value) {
		evt.preventDefault();
		popup.classList.remove("modal-feedback-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-feedback-error");
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-feedback-show")) {
			popup.classList.remove("modal-feedback-show");
			overlay.classList.remove("modal-overlay-show");
			popup.classList.remove("modal-feedback-error");
		}
	}
});


//slider
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slider-item");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"; 
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}