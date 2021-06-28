var song = " ";
var song2 = "";
leftWristX = 0 ;
leftWristY = 0 ;   
rightWristX = 0 ;
rightWristY = 0 ; 
function preload()
{
song = loadSound('Hp.mp3');
song2 = loadSound('avengers.mp3');
}

function setup()
{
canvas = createCanvas(600,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function draw()
{
    image(video,0,0,600,500);
}   
function modelLoaded()
{
    console.log("Pose Net is initialized");
}
function gotPoses(results)
{
if (results.length > 0)
 { 
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("Left Wrist X = " + leftWristX + "Left Wrist Y = " + leftWristY);
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("Right Wrist Y = " + rightWristY + " Right Wrist X = " + rightWristX);
}
}
function play()
{
    song.play();
    song.setVolume(10);
    song.rate(1);
}