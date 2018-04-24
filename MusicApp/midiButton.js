function MidiButton(){
  this.x = 20;
  this.y = 80;
  this.width = 20;
  this.height = 20;

  // this.volSlider;
  // this.volSlider = createSlider(0,1,0,0.01)
  // this.volSlider.position(50,50);

  this.MidiSetting = false;
  this.mic = new p5.AudioIn();
  this.recorder = new p5.SoundRecorder();
  this.soundFile = new p5.SoundFile();
  this.recorder.setInput(this.mic);


  this.recordingState = 0; //This will increment when pressed on
  // var clickState = false;

  this.draw = function(){
    if(this.MidiSetting)
    {
      fill(0,255,0)
      rect(this.x, this.y, this.width, this.height);
      scale(1 + this.extraScale);
      fill(255,255,255)
      text("Instructions: Snare Drum:'A' and Siren: 'S'",this.width,windowHeight-500,50)

    }
    else{
      fill(255,0,0)
      rect(this.x, this.y, this.width, this.height);

    }


    //checks for clicks on the button, starts or pauses playabck.
    //@returns true if clicked false otherwise.
    this.MidiButtonCheck = function(){
      //Checks that the mouseX is within boundaries and distance of the button.
      if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height){
        if(this.MidiSetting){
          } else {

            // if(this.recordingState == 0){
            //   this.mic.start()
            //   this.recordingState++
            // } else if(this.recordingState == 1) {
            //   this.recorder.stop();
            //   this.recorder.record(this.soundFile);
            //   this.recordingState++
            // }else if(this.recordingState==2){
            //   // soundFile.play(); // play the result!
            //   saveSound(this.soundFile, 'mySound.wav'); // save file
            //   this.recordingState++;
            //   this.recordingState == 0;
            // }
          }

          this.MidiSetting= !this.MidiSetting;
          return true;
      }
        return false;
    };

  }

}
