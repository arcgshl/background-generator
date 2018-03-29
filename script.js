var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var h4 = document.querySelector("h4");

body.style.background = "linear-gradient(to right," 
						+ color1.value 
						+", " 
						+ color2.value 
						+ ")";
css.textContent = body.style.background + ";";

var btn = document.createElement("button");
btn.appendChild(document.createTextNode("I Feel Lucky to Have Two Random Colors"));
h4.appendChild(btn);


function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var randomColor = "#";
	for (var i = 0; i < 6; i++) {
		randomColor += letters[Math.floor(Math.random() * 16)];
	}
	return randomColor;
}

function setRandomColorGradient() {
	body.style.background = 
		"linear-gradient(to right," 
		+ getRandomColor()
		+ "," 
		+ getRandomColor()
		+ ")";

	css.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background = 
		"linear-gradient(to right," 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";

	css.textContent = body.style.background + ";";
}

// function inside the addEventListener 不需要加括号来表示调用function
// addEventListener 会自动调用该function
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", setRandomColorGradient);
