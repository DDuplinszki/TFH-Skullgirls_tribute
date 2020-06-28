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

function opacityOn(name) {
	name.style.opacity = 1;
	name.style.transitionDuration = "1s";
};

function opacityOff(name) {
	name.style.opacity = 0;
	name.style.transitionDuration = "0.5s";
};

Tianhuo[0].addEventListener("mouseover", function(){opacityOn(TianhuoName); });
Tianhuo[0].addEventListener("mouseout", function(){opacityOff(TianhuoName); });

Velvet[0].addEventListener("mouseover", function(){opacityOn(VelvetName); });
Velvet[0].addEventListener("mouseout", function(){opacityOff(VelvetName); });

Paprika[0].addEventListener("mouseover", function(){opacityOn(PaprikaName); });
Paprika[0].addEventListener("mouseout", function(){opacityOff(PaprikaName); });

Arizona[0].addEventListener("mouseover", function(){opacityOn(ArizonaName); });
Arizona[0].addEventListener("mouseout", function(){opacityOff(ArizonaName); });

Oleander[0].addEventListener("mouseover", function(){opacityOn(OleanderName); });
Oleander[0].addEventListener("mouseout", function(){opacityOff(OleanderName); });

Pom[0].addEventListener("mouseover", function(){opacityOn(PomName); });
Pom[0].addEventListener("mouseout", function(){opacityOff(PomName); });