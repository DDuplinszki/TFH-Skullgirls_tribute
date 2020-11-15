// Skullgirls scripts

let PeacockCar = document.getElementById("Peacock_car");
let icons = document.getElementsByClassName("icons");
let iconReset = document.getElementsByClassName("iconReset");
let characterNames = document.getElementsByClassName("character_selection_text");

Array.from(characterNames).forEach((i) => {
	i.style.opacity = '0';
});

Array.from(icons).forEach((i) => {
	i.style.opacity = '0';
})

PeacockCar.addEventListener('animationend', () => {
	//removing the car
	PeacockCar.style.display = "none";

	//setting the names to be visible
	Array.from(characterNames).forEach((i) => {
		i.style.opacity = '1';
		i.style.transitionDuration = '1s';
	});
});

const iconAnimation = () => {
	//generating random number for random position
	let rand = (min, max) => {
		return Math.floor(Math.random() * (max - min +1)) + min;
	};
	//applying style to all iterables (icon pictures)
	Array.from(icons).forEach((icon, i) => {
		setTimeout(() => {
			//applying random position
			icon.style.opacity = '1';
			icon.style.transform = 'translateY('+rand(-40, -90)+'vh)';
			icon.style.transitionDuration = '0.6s';
			//pausing animation, so it won't float away
			icon.style.animationPlayState = 'paused';
			//animating the icons
			icon.style.borderRadius = '50%';
			icon.animate({
					opacity:  [1, 0.75], // [ from, to ]
  					border:   [ 'none', '1.2em rgba(196,165,46,0.75) solid' ]
				}, 600);
		}, 345 * i);	
	});

	//clearing up some properties and position (this gives the "falling" effect)
	Array.from(iconReset).forEach((iconItem, i) => {
		setTimeout(() => {
			iconItem.addEventListener('transitionend', () => {
				iconItem.classList.remove('icons');
				iconItem.style.transform = 'none';	
			});
		}, 345 * i);
	});
};

iconAnimation();