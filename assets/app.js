const firebaseConfig = {
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


//event for when submit button is clicked
$('.add-train-btn').on('click',function(event){
    //User input
    let trainName = $("#trainName").val().trim();
    let trainDestination = $("#destination").val().trim();
    let firstTrainTime = $("#firstTrainTime").val().trim();
    let trainFrequency = $("#frequency").val().trim();
    let trainNumber = 0;
    // Add some validation
    if (trainName === '' || trainDestination === '' || firstTrainTime === '' || trainFrequency === '') {
        alert('Please enter all train fields');
        return false;
    }

    if (!moment(firstTrainTime, 'HH:mm').isValid()) {
        alert('Please enter a valid first train time');
        return false;
    }

    if(isNaN(trainFrequency)) {
        alert('Train frequency has to be a number');
        return false;  
    }
    
    let newTrains = {
        name: trainName,
        destination: trainDestination,
        start: moment(firstTrainTime, 'HH:mm').format("HH:mm"),
        frequency: parseInt(trainFrequency)
    };
    db.ref().on('child_added', function(data){
        dv = data.val()
        var addtr = $('<tr>').append(
            $('<td>').append(addTrain),
            $('<td>').text(dv.trainName),
            $('<td>').text(dv.trainDestination),
            $('<td>').text(dv.firstTrainTime),
            $('td').text(dv.trainFrequency + 'minutes')
        ).attr('id', trainNumber);

        trainNumber ++;
        $('.train-schedule').append(addTrain);
    })
});