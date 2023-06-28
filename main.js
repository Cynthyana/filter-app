noseX =0
noseY = 0
function preload(){
    lipstick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    posenet= ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('posenet initialised :)')
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x -15;
        noseY = results[0].pose.nose.y +20;
        console.log('nose x = ' + noseX);
        console.log('nose y = ' + noseY);
    }
}

function draw(){
    image(video,0,0,500,500);
    image(lipstick, noseX,noseY, 50,50)
}

function take_snapshot(){
    save('photo.png');
}