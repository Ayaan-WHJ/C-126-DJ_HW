var song = " ";
var song2 = "";
leftWristX = 0 ;
leftWristY = 0 ;   
rightWristX = 0 ;
rightWristY = 0 ; 
scoreLeftWrist = 0 ;
scoreRightWrist = 0 ;
function preload()
{
song2 = loadSound('Hp.mp3');
song = loadSound('avengers.mp3');
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
    fill("#0000FF");
    stroke("#FFFFFF");
    
    if(scoreLeftWrist > 0.2){
    circle(leftWristX,leftWristY,20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    leftWristY_divided_by_1000 = remove_decimals/1000;   


    if (song2.isPlaying(true));
    {
        song.stop();
        song2.play();
        document.getElementById("song").innerHTML = "Song Playing -  Harry Potter theme song";

        
   }   }
   if(scoreRightWrist > 0.2){
    circle(rightWristX,rightWristY,20);
    InNumberrightWristY = Number(rightWristY);
    remove_decimals = floor(InNumberrightWristY);
    rightWristY_divided_by_1000 = remove_decimals/1000;   

   if (song.isPlaying(true));
    {
        song2.stop();
        song.play();
        document.getElementById("song").innerHTML = "Song Playing -  Avengers theme song";

        
   }   }}

  
function modelLoaded()
{
    console.log("Pose Net is initialized");
}
function gotPoses(results)
{
if (results.length > 0)
 { 
    console.log(results);
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    scoreRightWrist = results[0].pose.keypoints[10].score;
    console.log("Score Left Wrist = " + scoreLeftWrist + "Score Right wrist = " + scoreRightWrist);
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
