console.log("I am working on the tomagotchi mini-project.");


//Add Name to the Tomagotchi
const addName = () => {
	const name = prompt("A Tomagotchi has been born! What is it's name?", "Enter Name");
	const $nameDiv = $('<div>');
	$nameDiv.text("Name: " + name);
	$nameDiv.appendTo($('.tomagotchi'));
}

addName();

//Add Hunger to the Tomagotchi
const addHunger = () => {
	let hunger = 5;
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

//Feed Button Functionality

$('#feed').on('click', () => {
	console.log('Feed Button Clicked.'); // Test to make sure it's on and working
})

//Play Button Functionality

$('#play').on('click', () => {
	console.log('Play Button Clicked.'); // Test to make sure it's on and working
})

//Light Switch Button Functionality

$('#light').on('click', () => {
	console.log('Light Switch Button Clicked.'); // Test to make sure it's on and working
})








