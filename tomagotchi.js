console.log("I am working on the tomagotchi mini-project.");
let hunger = 5;
let sleepiness = 5;
let boredom = 5;
let age = 0;
let status = 'Baby';
const statArray = ['Baby', 'Tween', 'Grown-Up', 'Old-Timer'];

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
	const $hungerDiv = $('<div>');
	$hungerDiv.text("Hunger: " + hunger);
	$hungerDiv.appendTo($('.tomagotchi'));
	$('#feed').on('click', () => {
		hunger -= 1;
		$hungerDiv.text("Hunger: " + hunger);
	})
	//Set Timer
	const timer = setInterval(() => {
		hunger += 1; 
		$hungerDiv.text("Hunger: " + hunger);
		if (hunger === 10){
			clearInterval(timer);
			window.alert("Your Tomogatchi starved and is now dead.");
		}
		
	}, 60000);
}

addHunger();

//Add Sleepiness to the Tomagotchi
const addSleepy = () => {
	const $sleepyDiv = $('<div>');
	$sleepyDiv.text("Sleepiness: " + sleepiness);
	$sleepyDiv.appendTo($('.tomagotchi'));
	//Make light switch functional
	$('#light').on('click', () => {
		let $background = $('.tomagotchi');
		// Turn light off
		if($background.css('background-color')===('rgb(255, 255, 255)')){
			$background.css('background-color', '#3d3d3d');
			$background.css('color', 'white');
			// Tomagatchi becomes less sleepy every time you turn the light off and let it "sleep".
			sleepiness -= 1;
			$sleepyDiv.text("Sleepiness: " + sleepiness);
			console.log(sleepiness);
			// Turn the light back on. This has no affect on the Tomagatchi. 
		} else {
			$background.css('background-color', 'white');
			$background.css('color', '#3d3d3d');
		}
	})
	const timer = setInterval(() => {
		sleepiness += 1; 
		$sleepyDiv.text("Sleepiness: " + sleepiness);
		if (sleepiness === 10){
			clearInterval(timer);
			window.alert("Insomnia has driven your Tomagotchi mad.");
		}
	}, 60000);
}

addSleepy();

//Add Boredom to the Tomagotchi
const addBoredom = () => {
	const $boredDiv = $('<div>');
	$boredDiv.text("Boredom: " + boredom);
	$boredDiv.appendTo($('.tomagotchi'));
		//Make play switch functional
	$('#play').on('click', () => {
		// Tomagatchi becomes less bored by one point every time you play with it.
		boredom -= 1;
		$boredDiv.text("Boredom: " + boredom);
	})
	const timer = setInterval(() => {
		boredom += 1; 
		$boredDiv.text("Boredom: " + boredom);
		if (boredom === 10){
			clearInterval(timer);
			window.alert("Boredom has taken over your Tomagotchi - it isn't dead - but it might as well be.");
		}
	}, 60000);

}

addBoredom();


//Add Status to the Tomagotchi

const addStatus = () => {
	const $statusDiv = $('<div>');
	$statusDiv.text("Stage in Life: " + status);
	$statusDiv.appendTo($('.tomagotchi'));
	let statNum = 0
	const timer = setInterval(() => {
		statNum += 1;
		status = statArray[statNum];
		$statusDiv.text("Stage in Life: " + status);
		if (statNum === 3){
			clearInterval(timer);
		}	
	}, 60000);

}

//Add Age to the Tomagotchi

const addAge = () => {
	const $ageDiv = $('<div>');
	$ageDiv.text("Age: " + age);
	$ageDiv.appendTo($('.tomagotchi'));
	addStatus();
	const timer = setInterval(() => {
		age += 1; 
		$ageDiv.text("Age: " + age);
		
	}, 60000);



}

addAge();






