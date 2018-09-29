require('mraa')


// numero da placa galileo: 028350
var groveSensor = require("jsupm_grove")
var sensorModule = require('jsupm_ttp223');
var groveSensor = require('jsupm_grove');
var upmBuzzer = require("jsupm_buzzer");

var temp = new groveSensor.GroveTemp(0)
var luz = new groveSensor.GroveLight(1)

var touch = new sensorModule.TTP223(2);
var button = new groveSensor.GroveButton(3);
var myBuzzer = new upmBuzzer.Buzzer(5);

var requestify = require('requestify');
 
var thing = "DM120MauryJuniorFulvio";
 
var url = "https://dweet.io:443/dweet/for/" + thing;
var getUrl = "https://dweet.io:443/get/latest/dweet/for/" + thing;

readData()

function readData(){
    var celsius = temp.value();
    var luminouss = luz.value();

    var isPressedTouchT = touch.isPressed()
    var isPressedBtnB =  button.value()

    var alerted = "NOT ALERTED";

    if(celsius>30 && luminouss>=62){
        alerted = "ALERTED";
    }

    requestify.get(getUrl).then(function(response) {
        // Get the response body
        if (response.getBody().with[0].content.alert === 'ALERTED') {
            myBuzzer.playSound(2900,500000);
        }
    }, function(err){
        console.log(err)
    }), 

    requestify.post(url, {
        temperatura: celsius,
        luminous: luminouss,
        isPressedTouch: isPressedTouchT,
        isPressedButton: isPressedBtnB, 
        alert: alerted
    })
    .then(function(response) {
        // Response from server
        response.getBody();
        console.log(response.body)
    });

    setTimeout(readData,2000);
}


function melody()
{

    if (chords.length != 0)
    {
        //Play sound for one half second
        console.log( myBuzzer.playSound(chords[chordIndex],5000000));
        chordIndex++;
        //Reset the sound to start from the beginning. 
        if (chordIndex > chords.length - 1)
			chordIndex = 0;
    }
}

