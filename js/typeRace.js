var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var text = "Nikola je car i bog od svih Nikola je car i bog od svih Nikola je car i bog od svih Nikola je car i bog od svihNikola je car i bog od svih Nikola je car i bog od svih Nikola je car i bog od svih Nikola je car i bog od svih";
var i = 0;
var correct_t = "";

ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "black";
ctx.fillText(text,150,50);


function getText(input){
    var txt_arr = text.split(" ");
   var c = document.getElementById("myCanvas");
   console.log("poslednji karater "+ input.value[input.value.length-1])
   if(input.value[input.value.length-1] == " "){
       console.log("Upao sam bre")
       var word = input.value
    input.value =  input.value.substring(0, input.value.length-1);
    console.log("reč jee : "+input.value)
    if(input.value == txt_arr[i] ){
        console.log("bravo")
        correct_t+=input.value+" ";
        fillCorrect(correct_t)
        input.value = "";
        
    }else{
        correct_t+=txt_arr[i]+" ";
        fillWrong(correct_t)
        input.value = "";
    }
    i++;
   }
   
  
}

function fillCorrect(input){
    ctx.fillStyle = "green";
    ctx.fillText(input, 150, 50);
}

function fillWrong(input){
    ctx.fillStyle = "red";
    ctx.fillText(input, 150, 50);
}





//objektnoo ----- boja sve rec 

 