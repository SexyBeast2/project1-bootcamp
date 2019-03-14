var showFirstScreen = false;
var showSecondScreen = false;
var showSettings = false;

var firstScreen = $('#firstScreen');
var secondScreen = $('#secondScreenMain');
var settingsScreen = $('#settingsScreen');

function switchScreens() {
    if (showFirstScreen === true) {
        showSecondScreen = false;
        showSettings = false;
        firstScreen.css('display', 'block');
        secondScreen.css('display', 'none');
        settingsScreen.css('display', 'none');
        console.log("first screen on");
    } else if (showSecondScreen === true) {
        showFirstScreen = false;
        showSettings = false;
        secondScreen.css('display', 'block');
        firstScreen.css('display', 'none');
        settingsScreen.css('display', 'none');
        console.log("second screen on");
    } else if (showSettings === true) {
        showFirstScreen = false;
        showSecondScreen = false;
        settingsScreen.css('display', 'block');
        firstScreen.css('display', 'none');
        secondScreen.css('display', 'none');
        console.log("settings screen on");
    }
}



var user = {
    name: "",
    topic: "",
    todo: {
        item: ""
    }

}

// store user name
var userName;

var storedUser;

storedUser = JSON.parse(localStorage.getItem('current'));


if (storedUser == undefined) {
    showFirstScreen = true;
    switchScreens();
} else {
    showFirstScreen = false;
    showSecondScreen = true;
    switchScreens();
}


$('#first-submit-btn').click(function (event) {
    event.preventDefault();
    userName = $('#first-name').val().trim();

    if (userName == "") {
        ;
        // showFirstScreen = true;
        // switchScreens(); // tell user to enter a value
    } else {
        user.name = userName;
        console.log("the user name is " + user.name);
        localStorage.setItem('current', JSON.stringify(user));
        storedUser = JSON.parse(localStorage.getItem('current'));
        console.log(storedUser.name);

        showSecondScreen = true;
        showFirstScreen = false;
        switchScreens();
    }
    return storedUser;
});


console.log(storedUser);
console.log("////////////////");

//retriving user information




// if (userName != null) {
//     showSecondScreen = true;
//     switchScreens();
// } else {
//     showFirstScreen = true;
//     switchScreens();
// }

// if (storedUser == null) {
//     showFirstScreen = true;
//     switchScreens();
// } else {
//     showSecondScreen = true;
//     switchScreens();
// }


// if (showSecondScreen === true) {

// } else {
//     firstScreen = true;
//     switchScreens();
// }


// console.log(storedUser);
// console.log(storedUser.name);

//if user name set, hide first screen
// if (storedUser.name === null) {
//     showFirstScreen = true;
// } else {
//     showFirstScreen = false; //change this to false
// }

// if(showFirstScreen){
//     $('#firstScreen').css('display', 'block');
// } else {
//     $('#firstScreen').css('display', 'none');
// }





//name on second screen
$('#name2').html(storedUser.name);






//clock

var datetime = null,
    date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('hh:mm'));
};

$(document).ready(function () {
    datetime = $('#current-time')
    update();
    setInterval(update, 1000);
});

$(document).ready(function () {
    datetime = $('#clock2')
    update();
    setInterval(update, 1000);
});


// CHANGE BACKGROUND EVERY DAY
// ____________________________

var updateBackground = function () {
    number = Math.floor(Math.random() * 30);
    if (number > 9) {
        $('body').css('backgroundImage', 'url(./assets/imgs/0' + number + '.jpg');
    } else if (number === 0) {
        number = 100;
        $('body').css('backgroundImage', 'url(./assets/imgs/' + number + '.jpg');
    } else if (number < 10) {
        $('body').css('backgroundImage', 'url(./assets/imgs/00' + number + '.jpg');
    }
};

$(document).ready(function () {
    updateBackground();
    var dayInMilliseconds = 1000 * 60 * 60 * 24;
    setInterval(updateBackground, dayInMilliseconds);
});


//just to edit first screen



//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCNgqiTrbz6iK--BjUnhsdoTmmsUhIYF1Q",
//     authDomain: "project1-6dc14.firebaseapp.com",
//     databaseURL: "https://project1-6dc14.firebaseio.com",
//     projectId: "project1-6dc14",
//     storageBucket: "project1-6dc14.appspot.com",
//     messagingSenderId: "846245294444"
//   };
//   firebase.initializeApp(config);

// // Creating a reference to the database
// var database = firebase.database();

// Create a variable to easily track the current bg color.
// var currentBg = localStorage.getItem('bgColor');

// var borderColor = localStorage.getItem('borderColor');

// var fontColor = localStorage.getItem('fontColor');

// var storedName = localStorage.getItem('userName');

// //updates the name on html
// $('#nameDOM').html(storedName);


// function updateName() {
//     $('#nameDOM').html(localStorage.getItem('userName'));


// }


// //the input name will not show if a name is already assigned
// if (storedName === null) {
//     $('#startUserName').css('display', 'block');
//     $('#nameDOMHolder').css('display', 'none');
// } else {
//     $('#startUserName').css('display', 'none');
//     $('#nameDOMHolder').css('display', 'block');
// }

// $('#submitBtn').on('click', function () {
//     var userName = $('#name').val().trim();
//     localStorage.setItem('userName', userName);
//     updateName();
// });


//------------------------------------------------------------------

// database.ref().on("value", function(snapshot) {
//   // We are now inside our .on function...

//   // Console.log the "snapshot" value (a point-in-time representation of the database)
//   console.log(snapshot.val());
//   // This "snapshot" allows the page to get the most current values in firebase.
//   currentBg = snapshot.val().currentBg;

//   $("body").css("backgroundColor", currentBg);

// }, function(errorObject) {
//     console.log("The read failed: " + errorObject.code);
// });

// document.getElementsByTagName('body')[0].style.backgroundColor = currentBg;
// document.getElementsByTagName('body')[0].style.color = fontColor;
// document.getElementsByTagName('p')[0].style.border = borderColor;
// document.getElementsByTagName('p')[1].style.border = borderColor;
// document.getElementsByTagName('p')[2].style.border = borderColor;
// document.getElementsByTagName('p')[3].style.border = borderColor;


// function redBg() {

//     currentBg = 'red';
//     borderColor = 'solid 1px black';
//     fontColor = 'white';

//     document.getElementsByTagName('body')[0].style.backgroundColor = currentBg;
//     document.getElementsByTagName('body')[0].style.color = fontColor;

//     document.getElementsByTagName('p')[0].style.border = borderColor;
//     document.getElementsByTagName('p')[1].style.border = borderColor;
//     document.getElementsByTagName('p')[2].style.border = borderColor;
//     document.getElementsByTagName('p')[3].style.border = borderColor;



//     localStorage.setItem('bgColor', currentBg);
//     localStorage.setItem('borderColor', borderColor);
//     localStorage.setItem('fontColor', fontColor);
//     // database.ref().set({
//     //     currentBg: currentBg

//     // });
// }

// function blueBg() {

//     currentBg = 'blue';
//     borderColor = 'solid 1px white';
//     fontColor = 'white';

//     document.getElementsByTagName('body')[0].style.backgroundColor = currentBg;
//     document.getElementsByTagName('body')[0].style.color = fontColor;

//     document.getElementsByTagName('p')[0].style.border = borderColor;
//     document.getElementsByTagName('p')[1].style.border = borderColor;
//     document.getElementsByTagName('p')[2].style.border = borderColor;
//     document.getElementsByTagName('p')[3].style.border = borderColor;



//     localStorage.setItem('bgColor', currentBg);
//     localStorage.setItem('borderColor', borderColor);
//     localStorage.setItem('fontColor', fontColor);

//     // database.ref().set({
//     //     currentBg: currentBg

//     // });
// }

// function blackBg() {

//     currentBg = 'black';
//     borderColor = 'solid 1px white';
//     fontColor = 'white';

//     document.getElementsByTagName('body')[0].style.backgroundColor = currentBg;
//     document.getElementsByTagName('body')[0].style.color = fontColor;

//     document.getElementsByTagName('p')[0].style.border = borderColor;
//     document.getElementsByTagName('p')[1].style.border = borderColor;
//     document.getElementsByTagName('p')[2].style.border = borderColor;
//     document.getElementsByTagName('p')[3].style.border = borderColor;



//     localStorage.setItem('bgColor', currentBg);
//     localStorage.setItem('borderColor', borderColor);
//     localStorage.setItem('fontColor', fontColor);

//     // database.ref().set({
//     //     currentBg: currentBg

//     // });
// }

// function yellowBg() {

//     currentBg = 'yellow';
//     borderColor = 'solid 1px black';
//     fontColor = 'white';

//     document.getElementsByTagName('body')[0].style.backgroundColor = currentBg;
//     document.getElementsByTagName('body')[0].style.color = fontColor;

//     document.getElementsByTagName('p')[0].style.border = borderColor;
//     document.getElementsByTagName('p')[1].style.border = borderColor;
//     document.getElementsByTagName('p')[2].style.border = borderColor;
//     document.getElementsByTagName('p')[3].style.border = borderColor;



//     localStorage.setItem('bgColor', currentBg);
//     localStorage.setItem('borderColor', borderColor);
//     localStorage.setItem('fontColor', fontColor);

//     // database.ref().set({
//     //     currentBg: currentBg

//     // });
// }


// var suki = {
//     todo: {
//         item1: "read a book"
//     }


// };

// suki.name = "Suki";
// suki.age = 200;


// localStorage.setItem('userName2', JSON.stringify(suki));

// var sukiInfo = JSON.parse(localStorage.getItem('userName2'));

// var userArray = Object.values(sukiInfo);
// console.log(Object.values(sukiInfo));
// console.log(sukiInfo);

// console.log(sukiInfo.name);
// console.log(userArray[0].item1 + " from array ");




//var user = JSON.parse(localStorage.getItem('user')); If we need to delete all entries of the store we can simply do: