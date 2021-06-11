noseX=0;
noseY=0;
leftwristX=0;
rightwristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(600,150)
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("poseNet is Loaded");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX = "+noseX+"noseY = "+noseY);
    leftwristX=results[0].pose.leftWrist.x;
    rightwristX=results[0].pose.rightWrist.x;
    difference=floor(leftwristX-rightwristX);
    console.log("leftwristX = "+leftwristX+"rightwristX = "+rightwristX+"difference"+difference);
}
}
function draw(){
    background("#8f8d8e");
    fill("#ff0000");
    stroke("#ff0000");
    square(noseX,noseY,difference);
    document.getElementById("square_size").innerHTML="Width and Height of the square will be = "+difference+"px";
}