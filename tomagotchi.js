console.log("I am working on the tomagotchi mini-project.");

//Add Hunger to the Tomagotchi
const addHunger = () => {
	let hunger = 1;
	const $hungerDiv = $('<div>');
	$hungerDiv.text("Hunger: " + hunger);
	$hungerDiv.appendTo($('.tomagotchi'));
}

addHunger();

//Add Sleepiness to the Tomagotchi
const addSleepy = () => {
	let sleepiness = 1;
	const $sleepyDiv = $('<div>');
	$sleepyDiv.text("Sleepiness: " + sleepiness);
	$sleepyDiv.appendTo($('.tomagotchi'));
}

addSleepy();

//Add Boredom to the Tomagotchi
const addBoredom = () => {
	let boredom = 1;
	const $boredDiv = $('<div>');
	$boredDiv.text("Boredom: " + boredom);
	$boredDiv.appendTo($('.tomagotchi'));
}

addBoredom();

//Add Age to the Tomagotchi

const addAge = () => {
	let age = 0;
	const $ageDiv = $('<div>');
	$ageDiv.text("Age: " + age);
	$ageDiv.appendTo($('.tomagotchi'));
}

addAge();