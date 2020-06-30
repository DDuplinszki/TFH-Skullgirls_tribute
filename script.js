/*	TO DO list:
	- refactor code, especially event listeners
	- responsive design
	- add more copyright info
*/

// TFH variables: picture, name, slim picture, video

let Tianhuo = document.getElementsByClassName("Tianhuo");
let TianhuoName = document.querySelector("#top_row_names p:nth-child(1)");
let TianhuoSlim = document.getElementById("Tianhuo_slim");
let TianhuoVideo = document.getElementById("Tianhuo_video");

let Velvet = document.getElementsByClassName("Velvet");
let VelvetName = document.querySelector("#top_row_names p:nth-child(2)");
let VelvetSlim = document.getElementById("Velvet_slim");
let VelvetVideo = document.getElementById("Velvet_video");

let Paprika = document.getElementsByClassName("Paprika");
let PaprikaName = document.querySelector("#middle_row_names p:nth-child(1)");
let PaprikaSlim = document.getElementById("Paprika_slim");
let PaprikaVideo = document.getElementById("Paprika_video");

let Arizona = document.getElementsByClassName("Arizona");
let ArizonaName = document.querySelector("#middle_row_names p:nth-child(2)");
let ArizonaSlim = document.getElementById("Arizona_slim");
let ArizonaVideo = document.getElementById("Arizona_video");

let Oleander = document.getElementsByClassName("Oleander");
let OleanderName = document.querySelector("#bottom_row_names p:nth-child(1)");
let OleanderSlim = document.getElementById("Oleander_slim");
let OleanderVideo = document.getElementById("Oleander_video");

let Pom = document.getElementsByClassName("Pom");
let PomName = document.querySelector("#bottom_row_names p:nth-child(2)");
let PomSlim = document.getElementById("Pom_slim");
let PomVideo = document.getElementById("Pom_video");

// pictures and modal content

let pictures = document.getElementsByClassName("pic");
let modalPictureLeft = document.getElementById("modal_pictures_left");
let modalPictureRight = document.getElementById("modal_pictures_right");
let modalPictureCollection = document.getElementsByClassName("modal_pic");
let modalContent = document.getElementById("TFH_modal_content");
let modalTitle = document.getElementById("modal_title");

// videos

let modalVideoLeft = document.getElementById("modal_videos_left");
let modalVideoRight = document.getElementById("modal_videos_right");
let modalVideoCollection = document.getElementsByClassName("modal_vid");

// refactor this as soon as I learn how to do it!
// text, modal pictures, modal videos event listeners

function opacityOn(name) {
	name.style.opacity = 1
	name.style.transitionDuration = "1s"
};

function opacityOff(name) {
	name.style.opacity = 0
	name.style.transitionDuration = "0.5s"
};

function modalPictureOnLeft(modalPicture) {
	modalPicture.style.display = "block"
	modalPictureLeft.style.zIndex = 2
	modalContent.style.background = "linear-gradient(to right, #222, #fff 80%)"
};

function modalPictureOnRight(modalPicture) {
	modalPicture.style.display = "block"
	modalPictureRight.style.zIndex = 2
	modalContent.style.background = "linear-gradient(to left, #222, #fff 80%)"
};

function modalVideoOnLeft(modalVideo) {
	modalVideo.style.display = "block"
	modalVideoLeft.style.zIndex = 2
};

function modalVideoOnRight(modalVideo) {
	modalVideo.style.display = "block"
	modalVideoRight.style.zIndex = 2
}

Tianhuo[0].addEventListener("mouseover", function(){opacityOn(TianhuoName); });
Tianhuo[0].addEventListener("mouseout", function(){opacityOff(TianhuoName); });
Tianhuo[0].addEventListener("click", function(){modalPictureOnLeft(TianhuoSlim); });
Tianhuo[0].addEventListener("click", function(){modalVideoOnLeft(TianhuoVideo); });

Velvet[0].addEventListener("mouseover", function(){opacityOn(VelvetName); });
Velvet[0].addEventListener("mouseout", function(){opacityOff(VelvetName); });
Velvet[0].addEventListener("click", function(){modalPictureOnRight(VelvetSlim); });
Velvet[0].addEventListener("click", function(){modalVideoOnRight(VelvetVideo); });

Paprika[0].addEventListener("mouseover", function(){opacityOn(PaprikaName); });
Paprika[0].addEventListener("mouseout", function(){opacityOff(PaprikaName); });
Paprika[0].addEventListener("click", function(){modalPictureOnLeft(PaprikaSlim); });
Paprika[0].addEventListener("click", function(){modalVideoOnLeft(PaprikaVideo); });

Arizona[0].addEventListener("mouseover", function(){opacityOn(ArizonaName); });
Arizona[0].addEventListener("mouseout", function(){opacityOff(ArizonaName); });
Arizona[0].addEventListener("click", function(){modalPictureOnRight(ArizonaSlim) });
Arizona[0].addEventListener("click", function(){modalVideoOnRight(ArizonaVideo); });

Oleander[0].addEventListener("mouseover", function(){opacityOn(OleanderName); });
Oleander[0].addEventListener("mouseout", function(){opacityOff(OleanderName); });
Oleander[0].addEventListener("click", function(){modalPictureOnLeft(OleanderSlim); });
Oleander[0].addEventListener("click", function(){modalVideoOnLeft(OleanderVideo); });

Pom[0].addEventListener("mouseover", function(){opacityOn(PomName); });
Pom[0].addEventListener("mouseout", function(){opacityOff(PomName); });
Pom[0].addEventListener("click", function(){modalPictureOnRight(PomSlim); });
Pom[0].addEventListener("click", function(){modalVideoOnRight(PomVideo); });


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

// modal title

function addTitle(title, rgba) {
	modalTitle.textContent += title ;
	modalTitle.style.color = rgba ;
}

Tianhuo[0].addEventListener("click", function(){addTitle("Tianhuo", "rgba(241, 0, 51, 0.7)"); });
Velvet[0].addEventListener("click", function(){addTitle("Velvet", "rgba(0, 191, 243, 1)"); });
Paprika[0].addEventListener("click", function(){addTitle("Paprika", "rgba(203, 13, 75, 0.7)"); });
Arizona[0].addEventListener("click", function(){addTitle("Arizona", "rgba(25, 123, 48, 0.7)"); });
Oleander[0].addEventListener("click", function(){addTitle("Oleander", "rgba(123, 1, 118, 0.7)"); });
Pom[0].addEventListener("click", function(){addTitle("Pom", "rgba(65, 211, 130, 1)"); });

// modal exit behaviour

closeModal.onclick = function() {
	modal.style.display = "none";
	modalTitle.textContent = "";
	modalPictureLeft.style.zIndex = -1;
	modalPictureRight.style.zIndex = -1;
	modalVideoLeft.style.zIndex = -1;
	modalVideoRight.style.zIndex = -1;
	for (var i = 0; i < modalVideoCollection.length; i++) {
		modalVideoCollection[i].style.display = "none";
		modalVideoCollection[i].pause();
	};
	for (var i = 0; i < modalPictureCollection.length; i++) {
			modalPictureCollection[i].style.display = "none";
		};
	for(var i = 0; i < pictures.length; i++) {
			pictures[i].style.filter = "none";
		};
};

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
		modalTitle.textContent = "";
		modalPictureLeft.style.zIndex = -1;
		modalPictureRight.style.zIndex = -1;
		modalVideoLeft.style.zIndex = -1;
		modalVideoRight.style.zIndex = -1;
		for (var i = 0; i < modalVideoCollection.length; i++) {
		modalVideoCollection[i].style.display = "none";
		modalVideoCollection[i].pause();
		};
		for (var i = 0; i < modalPictureCollection.length; i++) {
			modalPictureCollection[i].style.display = "none";
		};
		for(var i = 0; i < pictures.length; i++) {
			pictures[i].style.filter = "none";
		};
	};
};