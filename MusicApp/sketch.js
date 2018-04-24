var sound, amp, fft, peakDetection, peaks;
var timestamp = new Date().getTime();

function preload() {
    sound = loadSound('assets/breaks2.mp3');
    snare = loadSound('assets/snare.wav');
    siren = loadSound('assets/siren.mp3')


    peakDetection = new p5.PeakDetect();


}

function setup() {
    createCanvas(windowWidth,windowHeight);
    controls = new MyCtrls();


    // create a new Amplitude analyzer
    amp = new p5.Amplitude();
    amp.setInput(sound);
    //fft
    fft = new p5.FFT();
    mic = new p5.AudioIn();


    // mic.start();
    recorder = new p5.SoundRecorder();
    soundFile = new p5.SoundFile();
    vis = new Visualisations();


    vis.add(new MicrophoneInput());
    vis.add(new VolumeControl());
    vis.add(new AmplitudeGraphics());
    // vis.add(new SoundRecording());
    vis.add(new Needles());


    mic.start();
    //creating a new sound file to be able to put the recording into it.
    amp.setInput(sound);
    amp.smooth(0.8);
    // soundVolume = map(mouseX, 1, 5, 0, 1);

    //Creating a dictionary with the contstraints of the camera to be able to later change the facingMode. For external camers and for 'environment' mode.
    // var constraints = {
    //   audio: false, //Checks for the audio of the camera.
    //   video: {
    //     facingMode: "user" //Controls the different facing modes.
    //   }
    // };
    background(50);


    capture = createCapture(VIDEO);
    camera_on = "1";
    capture.size(250,250);

}


function draw() {
  background(0);

// 	//draw the selected visualisation
	vis.selectedVisual.draw();
// 	//draw the controls on top.
	controls.draw();

  image(capture, 1000, 100, 200, 200); //Displays the camera
  // if (camera_on = true){
  //   if(CameraButton)
  //   camState = 1;
  //   // console.log("camState",camState);
  // } else if (camera_on = false && CameraButton){
  //   camState = 0;
  //   // console.log("camStateOFF",camState);
  // }

}
function mouseClicked(){
  controls.mousePressed();
}

function keyPressed(){
  controls.keyPressed(keyCode);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  if(vis.selectedVisual.hasOwnProperty('onResize')){
    vis.selectedVisual.onResize();
  }
}
