var song = " ";
function preload()
{
song = loadSound('Hp.mp3, avengers.mp3');
}

function setup()
{
canvas = createCanvas(600,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}

function draw()
{
    image(video,0,0,600,500);
}
