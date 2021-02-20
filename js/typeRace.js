var text = "Zdravo kako ste kako "
var err = 0;
var mistake = 0;

var speed = 0;
var distance = 900;

function generateText(text){
  for (let i = 0; i < text.length; i++) {
    $("#text_type").append(`<span id=${i}>${text[i]}</span>`);
  }
}

generateText(text)

function getText(input){

    if(startTime===0){
        startType();
        console.log(startTime) 
    } 
    
    var inp = input.value;
    var len = inp.length-1;
    var last_char = inp[len]
  /*  console.log(last_char)
    console.log(text[len])*/

        if(last_char===text[len] && err<=0){
            if(err<0) err=0;
            console.log("jednako")
            $(`#${len}`).css("color", "green");
            $(`#inputTXT`).css("background", "green");
            $(`#inputTXT`).css("color", "white");

            moveCar()
        }else{
            mistake++                                   // counting for accuracy must be better
            err++
            $(`#${len}`).css("color", "red");
            $(`#inputTXT`).css("background", "red");
            $(`#inputTXT`).css("color", "white");
        }
      /*console.log(err)*/
        if(text.length == inp.length && err<=0){
            endType();
            console.log(endTime)
            displayResult(text)
        }     
}


function delete_(event,index){ 
    var x = event.which || event.keyCode;
    if(x==8){
        console.log("briši")
        $(`#${index-1}`).css("color", "white");
        err-=2
    }
}













 