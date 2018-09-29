require('mraa')

var upmBuzzer = require("jsupm_buzzer");
var myBuzzer = new upmBuzzer.Buzzer(5);

var requestify = require('requestify');
 
var thing = "DM120MauryJuniorFulvioBUZZ";
var getUrl = "https://dweet.io:443/get/latest/dweet/for/" + thing;

readData()

function readData(){

    requestify.get(getUrl).then(function(response) {
        // Get the response body
        console.log("BUZZER:" + response.getBody().with[0].content.buzzer)
        
        if (response.getBody().with[0].content.buzzer == 1) {
            myBuzzer.playSound(2900,2000000);
        }
    }, function(err){
        console.log(err)
    }), 

    setTimeout(readData,5000);
}


