
function MyCtrls(){

  this.menuDisplayed = false;

  this.playbackButton = new PlaybackButton();
  this.midiButton = new MidiButton();
  this.recordingButton = new RecordingButton();
  // this.fsButton = new FSButton();
  snare = loadSound("assets/snare.wav")
  siren = loadSound("assets/siren.mp3")

  //Function to check if the button was pressed
  this.mousePressed = function(){
    //verification of the pressing of each button and checking over their functions to see if the conditions were met.
    if(!this.playbackButton.hitCheck())
    {
      this.playbackButton = new PlaybackButton();
    }
    if(!this.midiButton.MidiButtonCheck())
    {
      this.midiButton = new MidiButton();
    }
    //For the recording Button
    // if(!this.recordingButton.recordingCheck())
    // {
    //   this.recordingButton = new RecordingButton();
    // }

  };

  //Displays the menue by pressing space.
  this.keyPressed = function(keycode){
		console.log(keycode);
    //Checks for space
		if(keycode == 32){

			this.menuDisplayed = !this.menuDisplayed;
		}
    //Keycodes for the added affects
    if(keycode == 65){
      snare.play();

    } else {
      snare.stop();

    }
    if(keycode == 83){
      siren.play();
    } else {
      siren.stop();
    }

    //Keycodes ranging from 0 to 9 for each visuals
		if(keycode > 48 && keycode < 58){
			var visNumber = keycode - 49;
			vis.selectVisual(vis.visuals[visNumber].name);
		}
	};

  //Desiging of the Buttons
  this.draw = function(){
    push();
    fill("white");
    stroke("black");
    strokeWeight(2);
    textSize(34);
    //Ceiling rounding
    var soundLength = ceil(sound.duration());

    this.playbackButton.draw();
    this.midiButton.draw();
    fill(0,0,255)
    strokeWeight(3)
    fill(255,0,0)
    stroke(0,255,0)
    line(20,windowHeight-20,windowWidth-20,windowHeight-20);
    strokeWeight(1)
    ellipse(map(sound.currentTime(),0,soundLength,15,windowWidth),windowHeight-20 ,20,20);


    //Checks to see if menu is set to true to display it.
    if(this.menuDisplayed){
      text("Menu: ",100,30);
      this.menu();
    }
  };
  this.menu = function(){
		//draw out menu items for each visualisation
		for(var i = 0; i < vis.visuals.length; i++){
			text(i + 1 + ":" + " " + vis.visuals[i].name, 100, 80 + 50 * i)
		}

	};
}
