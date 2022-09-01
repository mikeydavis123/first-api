fetch('https://api.adviceslip.com/advice').then((data) => {
    return data.json();
}).then((completedata) => {
    document.getElementById("advice").innerHTML=(completedata.slip.advice);

})
 document.getElementById("button").addEventListener("click",wow);
 function wow(){
     location.reload();
 }

