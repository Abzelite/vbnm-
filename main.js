noseX=0;
noseY=0;
difference=0;
rightwristx=0;
leftwristx=0;
function setup()
{
video=createCapture(VIDEO);
video.size(550,550);

canvas=createCanvas(560,560);
canvas.position(600,100);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw()
{
    background('#808080');
    fill('#FF0000');
    stroke('#FF0000');
    square(noseX, noseY, difference);
    document.getElementById("square_side").innerHTML="wdth and the height of the square will be"+difference;
}
function modelLoaded()
{
    console.log('poseNet is initialized');
}
function gotPoses(results)
{
    if(results.length>0)
    {
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX ="+noseX+"noseY ="+noseY)
rightwristx=results[0].pose.rightWrist.x;
leftwristx=results[0].pose.leftWrist.x;
difference=floor(leftwristx - rightwristx);
console.log("leftwristx = "+leftwristx+"rightwristx"+rightwristx+"difference"+difference)
    }
}