function startclassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml2.soundClassifer('model.json',modelReady);
}

function modelReady() {
    classifier.classify(gotResult);
}

function gotResult(error,results) {
    console.log('GOT RESULTS');
}