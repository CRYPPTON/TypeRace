var startTime = 0;
var endTime = 0;

function startType(){
    var date = new Date()
    startTime = date.getTime();
}

function endType(){
    var date = new Date()
    endTime = date.getTime();
}


function displayResult(){
    var sec = (endTime-startTime)/1000
    var wordLen = text.split(" ").length;
    console.log("Typing time : "+sec+" sec.")
    var wpm = (wordLen)/(sec/60)
    var acc = 100 - ((100/text.length)*mistake)
    $("#wpm").text(Math.round(wpm));
    $("#acc").text(Math.round(acc));
}






