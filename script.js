console.log("hejsan");
var BUTTON = document.getElementById("submit");

BUTTON.addEventListener("click", function (e) { 
    var inputone = document.getElementById('inputone').value;
    var inputtwo = document.getElementById('inputone').value;
 
    inputone=parseInt(inputone);
    inputtwo=parseInt(inputtwo);

    var a=inputone*inputone;
    var b=inputtwo*inputtwo;
    var result=a+b
    result=Math.sqrt(result); 
 
    document.getElementById('result').innerText = result;
});

