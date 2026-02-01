function displayResult(value) {
    let output = document.getElementById("output");
    if (value < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
    output.innerHTML = value;
}

function doAdd(){
    let first=document.getElementById('first').value;
    let second=document.getElementById('second').value;
    displayResult(String(Number(first)+Number(second)));
}

function doSub(){

    let first=document.getElementById('first').value;
    let second=document.getElementById('second').value;
    displayResult(String(Number(first)-Number(second)));

}


function doMulti(){

    let first=document.getElementById('first').value;
    let second=document.getElementById('second').value;
    displayResult(String(Number(first)*Number(second)));

}

function doDiv(){

    let first=document.getElementById('first').value;
    let second=document.getElementById('second').value;
    if (Number(second) === 0) {
        displayResult("Division by zero not possible");
        return;
    }
    displayResult(String(Number(first)/Number(second)));


}
function doPow(){
    let first=Number(document.getElementById('first').value);
    let second=Number(document.getElementById('second').value);
    let result = 1;
    for (let i = 0; i < second; i = i + 1){
        result = first * result;
    }
    displayResult(String(result));
}
function Clear(){

    let first=document.getElementById('first').value="";
    let second=document.getElementById('second').value="";
    document.getElementById("output").innerHTML="";

}
