function RecordingButton(){

  //Creates a button for recording.
  this.x = 20;
  this.y = 180;
  this.width = 40;
  this.height = 20;

  this.RecorderSetting = false;

  mic = new p5.AudioIn();
  mic.start();
  recorder = new p5.SoundRecorder();
  recorder.setInput(mic);
  soundFile = new p5.SoundFile();

  this.draw = function(){
    if(this.RecorderSetting)
    {

      ellipse(windowWidth/2,windowHeight/2,100,100)
    }
    else{
      fill(255,0,0)
      rect(this.x, this.y, this.width, this.height);

    }
  this.recordingCheck = function(){
    if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height){
      if(this.RecorderSetting){
          console.log("Rec No")
        } else {
          console.log("Rec Yes")
          text('Enable mic and click the mouse to begin recording', 20, 20);
          mic.start();

          console.log("Recording");
        }
        this.RecorderSetting= !this.RecorderSetting;
        return true;
    }
      return false;
  };

}

}
