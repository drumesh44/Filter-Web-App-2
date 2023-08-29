function preloadO() {
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
}

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on(pose,getpose);

function draw() {
}

function take_snapshot() {
    save('myFilterImage.png')
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function getpose(results) {
    if(results.lenth>0) {
        console.log(results);
        console.log("nose x: "+results[0].pose.nose.x);
        console.log("nose y: "+results[0].pose.nose.y);
    }
}