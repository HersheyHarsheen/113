noseX=0;
noseY=300;

function preload() {
clown_nose =loadImage('https://i.postimg.cc/FRxpjbVp/kisspng-handlebar-moustache-clip-art-mustache-5abbe7c6e478f5-6103081615222640069358.jpg');
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{ 

    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = "+ noseY);
    }
}

function draw() {
 image(video, 0, 0, 300, 300);
 //fill(255, 0, 0);
//stroke(255,0,0);
 //circle(noseX, noseY, 20);
 image(clown_nose, noseX, noseY, 30 , 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}
