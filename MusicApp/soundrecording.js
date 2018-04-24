function SoundRecording(){
  this.name = "Recording";

  // var mic;
  mic = new p5.AudioIn();
  recorder = new p5.SoundRecorder();
  soundFile = new p5.SoundFile();
  recorder.setInput(mic);

  var recorder;
  var soundFile;
  var recordingState = 0; //This will increment when pressed on
  var clickState = false;

  this.x = windowWidth/2;
  this.y = windowHeight/2;
  this.width = 50;
  this.height = 50;

  // mic.start();
  this.draw = function(){
    // mic.start();
    background(10,70,100);
    push();
    console.log("Record1",recordingState)
    fill(255,0,0)
    rect(this.x,this.y,this.width,this.height)
    // recordingState = true;
    this.mouseClicked=function(){
      if (recordingState == 1 && mouseX > this.x){
          clickState = true;
          mic.start();
          recorder.record(soundFile);

          fill(0,100,100)
          rect(windowWidth/2,windowHeight/2,20,40)
          console.log("Record",recordingState)

          // background(150,0,0);
          fill(0,255,0)
          rect(windowWidth/2,windowHeight/2,40,40)
          text("Recording",20,20)
          recordingState++

      }
      else if (recordingState === 2 && clickState){
        recorder.stop();
        background(0,255,0);
        text('Recording stopped. Click to play & save', 20, 20);
        recordingState++;
      }

      else if (recordingState === 3) {
        soundFile.play(); // play the result!
        saveSound(soundFile, 'mySound.wav'); // save file
        recordingState++;
      }

    }

  pop();
  }

}
