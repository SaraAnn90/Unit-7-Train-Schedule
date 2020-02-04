let firebaseConfig = {
    apikey: "AIzaSyCIuNK1ddVJEIRucpIqNylo0jvMijoGHk4",
    authDomain: "train-scheduler-922a1.firebaseapp.com",
    databaseURL: "https://train-scheduler-922a1.firebasio.com",
    projectID: "train-scheduler-922a1",
    storageBucket: "train-scheduler-922a1.appspot.com",
    messagingSenderId: "169756780183",
    appID: "1:169756780183:web:0c234e5cf52c51823a2bd2",
};
//connect to Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.database();

//User input
var trainName = $("#trainName").val().trim();
var trainDestination = $("#destination").val().trim();
var firstTrain = $("#firstTrainTime").val().trim();
var trainFrequency = $("#frequency").val().trim();

let newTrains = {
        name: trainName,
        destination: trainDestination,
        start: firstTrainTime,
        frequency: trainFrequency
};
        


//event for when submit button is clicked
$('.btn-primary').on('click',function(event){
    event.preventDefault();
}