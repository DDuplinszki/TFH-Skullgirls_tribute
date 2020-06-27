let Tianhuo = document.getElementsByClassName("Tianhuo");
let TianhuoName = document.querySelector("#top_row_names p:nth-child(1)");
let Velvet = document.getElementsByClassName("Velvet");
let VelvetName = document.querySelector("#top_row_names p:nth-child(2)");
let Paprika = document.getElementsByClassName("Paprika");
let PaprikaName = document.querySelector("#middle_row_names p:nth-child(1)");
let Arizona = document.getElementsByClassName("Arizona");
let ArizonaName = document.querySelector("#middle_row_names p:nth-child(2)");
let Oleander = document.getElementsByClassName("Oleander");
let OleanderName = document.querySelector("#bottom_row_names p:nth-child(1)");
let Pom = document.getElementsByClassName("Pom");
let PomName = document.querySelector("#bottom_row_names p:nth-child(2)");


// refactor this as soon as I learn how to do it!

Tianhuo[0].addEventListener("mouseover", function () {
	TianhuoName.style.opacity = 1;
	TianhuoName.style.transitionDuration = "1s";
});

Tianhuo[0].addEventListener("mouseout", function () {
	TianhuoName.style.opacity = 0;
	TianhuoName.style.transitionDuration = "0.5s";
});

Velvet[0].addEventListener("mouseover", function() {
	VelvetName.style.opacity = 1;
	VelvetName.style.transitionDuration = "1s";
});

Velvet[0].addEventListener("mouseout", function () {
	VelvetName.style.opacity = 0;
	VelvetName.style.transitionDuration = "0.5s";
});

Paprika[0].addEventListener("mouseover", function() {
	PaprikaName.style.opacity = 1;
	PaprikaName.style.transitionDuration = "1s";
});

Paprika[0].addEventListener("mouseout", function () {
	PaprikaName.style.opacity = 0;
	PaprikaName.style.transitionDuration = "0.5s";
});

Arizona[0].addEventListener("mouseover", function() {
	ArizonaName.style.opacity = 1;
	ArizonaName.style.transitionDuration = "1s";
});

Arizona[0].addEventListener("mouseout", function () {
	ArizonaName.style.opacity = 0;
	ArizonaName.style.transitionDuration = "0.5s";
});

Oleander[0].addEventListener("mouseover", function() {
	OleanderName.style.opacity = 1;
	OleanderName.style.transitionDuration = "1s";
});

Oleander[0].addEventListener("mouseout", function () {
	OleanderName.style.opacity = 0;
	OleanderName.style.transitionDuration = "0.5s";
});

Pom[0].addEventListener("mouseover", function() {
	PomName.style.opacity = 1;
	PomName.style.transitionDuration = "1s";
});

Pom[0].addEventListener("mouseout", function () {
	PomName.style.opacity = 0;
	PomName.style.transitionDuration = "0.5s";
});