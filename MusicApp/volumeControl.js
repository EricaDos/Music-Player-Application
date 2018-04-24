function VolumeControl(){
  this.name = "Volume and Speed";

  this.draw = function(){
    push();
    fill(0,100,200);
    noStroke();
    var volume = map(mouseX, 0, windowWidth, 0, 1);
    //Constrain is the value between min and max
    volume = constrain(volume, 0, 1);
    //Controls the speed through mouseY and moving it up and down
    var speed = map(mouseY, 0.1, height, 0, 2);
    //Constrain is the value between min and max
    speed = constrain(speed, 0.01, 4);
    //Changes the speed accordingly to the maping
    sound.rate(speed);

    //Rounds to the nearest tens
    console.log(ceil(volume))
    sound.amp(volume);
    stroke(0);
    fill(51, 100);

    //Creates a rect to represent it and moves according with mouseX
    rect(mouseX, 100, 48, 48);
    fill(0,255,0)
    //Allows the user to see the changes they are making.
    text("Vol: "+(ceil(volume*10)),mouseX-10,110)
    stroke(0);
    fill(100,100, 100);
    rect(100, mouseY, 48, 48);
    fill(0,255,0)
    text("Speed:"+(ceil(speed)),70,mouseY)


    //waveform gives the amplitude value along a time domain
    var waveform = fft.waveform();
    noFill();
    beginShape();

    stroke(127,127,127); // waveform is grey
    strokeWeight(1);
    //Iterates through the length of the waveform and constantly inccrementing which will provide the maping values to create a wave which is stored in vertex()
    for (var i = 0; i< waveform.length; i++){
        var x = map(i, 0, waveform.length, 0, width);
        var y = map( waveform[i], -1, 1, 0, height);
        vertex(x,y);
    }
    endShape();
    pop();
  }

}
