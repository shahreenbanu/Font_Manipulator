var left_wrist = 0;
var right_wrist = 0;
var difference = 0;

function preload() {

}

function setup() {
canvas = createCanvas(600,500);
video = createCapture(VIDEO);
video.size(600,600);
canvas.center();
poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
 function draw() {
    canvas.clear();
    textSize(difference);
  text("Shahreen",300,250);
 }
 function modelLoaded() {
    console.log ("model is loaded!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
 }
 function gotPoses(results) {
    if(results.length > 0 ) {
        console.log (results);
       left_wrist = results[0].pose.leftWrist.x;
       right_wrist = results[0].pose.rightWrist.x;
       difference = Math.round(left_wrist - right_wrist);
       console.log (difference);
      
      
 }
}