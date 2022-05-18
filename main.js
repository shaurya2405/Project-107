function startClaassification()
{
navigator.mediaDevices.getUserMedia({audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/l9R29olae/', modelReady);   
}

function modelReady()
{
classifier.classify(gotResults);    
}