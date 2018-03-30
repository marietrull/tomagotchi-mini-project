console.log("I am working on the tomagotchi mini-project.");

const statArray = ['Baby', 'Tween', 'Grown-Up', 'Old-Timer'];



class Tamagotchi {
	constructor(hunger, sleepiness, boredom, age, status){
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.age = age;
		this.status = status;

	}
	addName(){
		const name = prompt("A Tomagotchi has been born! What is it's name?", "Enter Name");
		$('#name').text("Name: " + name);
	}
	addHunger(){
		$('#hunger').text("Hunger: " + this.hunger);
	}
	addSleepy(){
		$('#sleepy').text("Sleepiness: " + this.sleepiness);
	}
	addBoredom(){
		$('#bored').text("Boredom: " + this.boredom);
	}
	addAge(){
		$('#age').text("Age: " + this.age);
	}
	addStatus(){
		$('#stat').text("Stage in Life: " + this.status);
	}
	timer(){
		let time = 0;

		setInterval(() => {
			time +=1; 

			if (time % 10 === 0 && this.hunger < 10 && this.sleepiness < 10 && this.boredom < 10){
				this.hunger +=1;
				$('#hunger').text("Hunger: " + this.hunger);
				this.sleepiness +=1;
				$('#sleepy').text("Sleepiness: " + this.sleepiness);
				this.boredom +=1;
				$('#bored').text("Boredom: " + this.boredom);
			} 
			console.log(time);

			if (time % 60 === 0){
				this.age +=1;
				$('#age').text("Age: " + this.age);
			}

		}, 1000);
	}
};


//GIVE FEED BUTTON FUNCTIONALITY
$('#feed').on('click', () => {
	myTom.hunger -= 1;
	$('#hunger').text("Hunger: " + myTom.hunger);
});


//GIVE LIGHT SWITCH BUTTON FUNCTIONALITY
$('#light').on('click', () => {
	let $wholePage = $('body');
	let $background = $('#tomagotchi');
	let $header = $('header');
	// Turn light off
	if($background.css('background-color')===('rgb(255, 255, 255)')){
		// Change css features with the lights off
		$wholePage.css('background-color', 'black');
		$background.css('background-color', '#3d3d3d');
		$background.css('color', 'white');
		$header.css('background-color', "#3d3d3d");
		$header.css('color', 'white');
		// Switch image when light is off
		$('#photo').attr('src','http://de.tamagotchifriends.com/wp-content/uploads/sites/10/2013/11/kuchipatchi-info2.png');
		// Tomagatchi becomes less sleepy every time you turn the light off and let it "sleep".
		myTom.sleepiness -= 1;
		$('#sleepy').text("Sleepiness: " + myTom.sleepiness);
		// Turn the light back on. This has no affect on the Tomagatchi. 
	} else {
		// change css features with the lights on
		$background.css('background-color', 'white');
		$wholePage.css('background-color', '#00CDCD');
		$background.css('color', '#3d3d3d');
		$header.css('background-color', "white");
		$header.css('color', '#3d3d3d');
		// switch image when the light is on
		$('#photo').attr('src','https://vignette.wikia.nocookie.net/tamagotchi/images/1/12/Kuchipatchi_pose.png/revision/latest?cb=20140831175650');
	}
});

//GIVE PLAY BUTTON FUNCTIONALITY
$('#play').on('click', () => {
	// Tomagatchi becomes less bored by one point every time you play with it.
	myTom.boredom -= 1;
	$('#bored').text("Boredom: " + myTom.boredom);
});

//GIVE RESET BUTTON FUNCTIONALITY
$('#reset').on('click', () => {
	myTom.hunger = 5;
	$('#hunger').text("Hunger: " + myTom.hunger);
	myTom.sleepiness = 5;
	$('#sleepy').text("Sleepiness: " + myTom.sleepiness);
	myTom.boredom = 5;
	$('#bored').text("Boredom: " + myTom.boredom);
});

//CALL CLASS + METHODS
const myTom = new Tamagotchi(5,5,5,0,'Baby');

myTom.addName();

myTom.addHunger();

myTom.addSleepy();

myTom.addBoredom();

myTom.addAge();

myTom.addStatus();

// myTom.timer();








