var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
// var button = document.querySelector("#randomG");

function currentGradient(){
	css.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	currentGradient();
}


// function generateGradient(){
// 	var r1 = Math.floor(Math.random() * 256);
// 	var g1 = Math.floor(Math.random() * 256);
// 	var b1 = Math.floor(Math.random() * 256);
// 	var r2 = Math.floor(Math.random() * 256);
// 	var g2 = Math.floor(Math.random() * 256);
// 	var b2 = Math.floor(Math.random() * 256);
	


// 	body.style.background = 
// 	"linear-gradient(to right, " + r1
// 	+ ", " + g1 + ", " + b1
// 	+ ", " + r2 + ", " + g2 + ", " + b2 + ", " + a +
// 	+ ")";

// 	currentGradient();
// };

var randomButton = document.querySelector('#random');

function colorGenerator(){
    function random(){
        let num = Math.floor(Math.random()*16);
        return num.toString(16);
      }
    
    function hexGenerator(){
        let hex = '#';
        for(var i = 0; i<6; i++){
          hex+= random();
        }
        return hex;
      }

    color1.value = hexGenerator();
    color2.value = hexGenerator();
    setGradient();
}

randomButton.addEventListener('click', colorGenerator);






color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", generateGradient);