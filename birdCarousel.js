
	function startBirdCarousel(){
		birdImages();
		birdPages();
		displayBird();
		// setTimeout(start, 1000);
	}

/*** Bird Objects ***/

	function Birds(species, image){
		this.species = species;
		this.image = image;
	};

	var birds = [
		new Birds("Black Phoebe", "birds/blackPhoebe.JPG"),
		new Birds("House Finch", "birds/houseFinch.JPG"),
		new Birds("House Sparrow", "birds/houseSparrow.JPG"),
		new Birds("Northern Mockingbird", "birds/northernMockingbird.JPG"),
		new Birds("American Kestrel", "birds/americanKestrel.JPG"),
		new Birds("American Robin", "birds/americanRobin.JPG"),
		new Birds("Dark-eyed Junco", "birds/darkEyedJunco.JPG"),
		new Birds("Inca Dove", "birds/incaDove.JPG"),
		new Birds("Lesser Goldfinch", "birds/lesserGoldfinch.JPG"),
		new Birds("Ruby-crowned Kinglet", "birds/rubyCrownedKinglet.JPG"),
		new Birds("Say's Phoebe", "birds/saysPhoebe.JPG"),
		new Birds("Audubon's Yellow-rumped Warbler", "birds/yellowRumpedWarbler.JPG")
	];

/*** Bird Slides ***/

	var currentBirdNumber = 0;
	var allBirds = "";

	displayBird = () => {
		document.getElementById("birdImage" + currentBirdNumber).style.opacity = 1;
		document.getElementById("birdName").innerHTML = birds[currentBirdNumber].species;
		document.getElementById("birdDot" + currentBirdNumber).className = "currBirdPg";
		document.getElementById("birdImage" + currentBirdNumber).style.position = "relative";
	};

	function oldBird(){
		document.getElementById("birdImage" + currentBirdNumber).style.opacity = 0;
		document.getElementById("birdImage" + currentBirdNumber).style.position = "absolute";
	}

	birdImages = () => {
		for(bird in birds){
			allBirds += "<img id='birdImage" + bird + "' src='" + birds[bird].image + "' />";
		}
		document.getElementById("birdPic").innerHTML = allBirds;
	};

	function birdPages(){
		var birdPgDot = "";
		for(i = 0; i < birds.length; i++){
			birdPgDot += "<div class='unselectedBirdPage' id='birdDot" + i + "' onclick='chooseBird(this);'></div>";
		}
		document.getElementById("birdPages").innerHTML = birdPgDot;
	};



/*** Change Bird Slides ***/

	function nextBird(){
		stopAuto();
		oldBird();
		document.getElementById("birdDot" + currentBirdNumber).className = "unselectedBirdPage";
		currentBirdNumber++;
		if(currentBirdNumber >= birds.length){
			currentBirdNumber = 0;
		}
		displayBird();
	};

	function prevBird(){
		stopAuto();
		oldBird();
		document.getElementById("birdDot" + currentBirdNumber).className = "unselectedBirdPage";
		currentBirdNumber--;
		if(currentBirdNumber < 0){
			currentBirdNumber = (birds.length - 1);
		}
		displayBird();
	};

	function chooseBird(choice){
		stopAuto();
		oldBird();
		document.getElementById("birdDot" + currentBirdNumber).className = "unselectedBirdPage";
		for(i = 0; i < birds.length; i++){
			if(choice.id == "birdDot" + i){
				currentBirdNumber = i;
				displayBird();
			}
		}
	};

	function birdAuto(){
		oldBird();
		document.getElementById("birdDot" + currentBirdNumber).className = "unselectedBirdPage";
		currentBirdNumber++;
		if(currentBirdNumber >= birds.length){
			currentBirdNumber = 0;
		}
		displayBird();
	};

	var startBird;

	function birdAuto(){
		oldBird();
		document.getElementById("birdDot" + currentBirdNumber).className = "unselectedBirdPage";
		currentBirdNumber++;
		if(currentBirdNumber >= birds.length){
			currentBirdNumber = 0;
		}
		displayBird();
	};

	function start(){
		startBird = setInterval(birdAuto, 3000);
	};

	function stopAuto(){
		clearInterval(startBird);
	};

	startBirdCarousel();
