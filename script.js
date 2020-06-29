// TFH picture hover/name opacity

let Tianhuo = document.getElementsByClassName("Tianhuo");
let TianhuoName = document.querySelector("#top_row_names p:nth-child(1)");
let TianhuoSlim = document.getElementById("Tianhuo_slim");

let Velvet = document.getElementsByClassName("Velvet");
let VelvetName = document.querySelector("#top_row_names p:nth-child(2)");

let Paprika = document.getElementsByClassName("Paprika");
let PaprikaName = document.querySelector("#middle_row_names p:nth-child(1)");
let PaprikaSlim = document.getElementById("Paprika_slim");

let Arizona = document.getElementsByClassName("Arizona");
let ArizonaName = document.querySelector("#middle_row_names p:nth-child(2)");

let Oleander = document.getElementsByClassName("Oleander");
let OleanderName = document.querySelector("#bottom_row_names p:nth-child(1)");
let OleanderSlim = document.getElementById("Oleander_slim");

let Pom = document.getElementsByClassName("Pom");
let PomName = document.querySelector("#bottom_row_names p:nth-child(2)");

let pictures = document.getElementsByClassName("pic");
let modalPictureLeft = document.getElementById("modal_pictures_left");
let modalPictureLeftCollection = document.getElementsByClassName("modal_pic");

// refactor this as soon as I learn how to do it!

function opacityOn(name) {
	name.style.opacity = 1;
	name.style.transitionDuration = "1s";
};

function opacityOff(name) {
	name.style.opacity = 0;
	name.style.transitionDuration = "0.5s";
};

function modalPictureOn(modalPicture) {
	modalPicture.style.display = "block";
	modalPictureLeft.style.zIndex = 2;
};

Tianhuo[0].addEventListener("mouseover", function(){opacityOn(TianhuoName); });
Tianhuo[0].addEventListener("mouseout", function(){opacityOff(TianhuoName); });
Tianhuo[0].addEventListener("click", function() {modalPictureOn(TianhuoSlim); });

Velvet[0].addEventListener("mouseover", function(){opacityOn(VelvetName); });
Velvet[0].addEventListener("mouseout", function(){opacityOff(VelvetName); });

Paprika[0].addEventListener("mouseover", function(){opacityOn(PaprikaName); });
Paprika[0].addEventListener("mouseout", function(){opacityOff(PaprikaName); });
Paprika[0].addEventListener("click", function() {modalPictureOn(PaprikaSlim); });

Arizona[0].addEventListener("mouseover", function(){opacityOn(ArizonaName); });
Arizona[0].addEventListener("mouseout", function(){opacityOff(ArizonaName); });

Oleander[0].addEventListener("mouseover", function(){opacityOn(OleanderName); });
Oleander[0].addEventListener("mouseout", function(){opacityOff(OleanderName); });
Oleander[0].addEventListener("click", function(){modalPictureOn(OleanderSlim); });

Pom[0].addEventListener("mouseover", function(){opacityOn(PomName); });
Pom[0].addEventListener("mouseout", function(){opacityOff(PomName); });


// TFH modal

let modal = document.getElementById("TFH_modal");
let closeModal = document.getElementById("close");

// modal start behaviour

function modalOn() {
	modal.style.display = "block";
};

function blurOn () {
	if (modal.style.display == "block") {
		for(var i = 0; i < pictures.length; i++) {
			pictures[i].style.filter = "blur(5px)";
		};
	};
};

function blurOff () {
	if (modal.style.display == "none") {
		for(var i = 0; i < pictures.length; i++) {
			pictures[i].style.filter = "none";
		};
	};
};

for(var i = 0; i < pictures.length; i++){
    pictures[i].addEventListener("click", modalOn);
    pictures[i].addEventListener("click", blurOn);
    pictures[i].addEventListener("click", blurOff);
};

// modal exit behaviour

closeModal.onclick = function() {
	modal.style.display = "none";
	modalPictureLeft.style.zIndex = -1;
	for (var i = 0; i < modalPictureLeftCollection.length; i++) {
			modalPictureLeftCollection[i].style.display = "none";
		};
	for(var i = 0; i < pictures.length; i++) {
			pictures[i].style.filter = "none";
		};
};

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
		modalPictureLeft.style.zIndex = -1;
		for (var i = 0; i < modalPictureLeftCollection.length; i++) {
			modalPictureLeftCollection[i].style.display = "none";
		};
		for(var i = 0; i < pictures.length; i++) {
			pictures[i].style.filter = "none";
		};
	};
};