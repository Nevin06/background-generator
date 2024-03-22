var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomButton"); // 3

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	// css.textContent = "Initial CSS Background: " + body.style.background + ";";
}

function generateRandomColor() {
	var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
	return randomColor;
} // 3

function setRandomColors() {
	color1.value = generateRandomColor();
	color2.value = generateRandomColor();
	setGradient();
} // 3

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", setRandomColors); // 3

// Call setGradient() to match the initial background gradient and display it on page load
window.addEventListener("load", function() {
	setGradient();	// Call setGradient() to match the initial background // 1
	css.textContent = "Initial CSS Background: " + body.style.background + ";"; // 2 // display the initial background gradient on page load
});