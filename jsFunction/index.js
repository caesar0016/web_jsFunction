var btnConfirm = document.getElementById("btnConfirm");
var result = document.getElementById("labelOutput");
var inputAge = document.getElementById("inputAge");

btnConfirm.addEventListener("click", function(){

    var age = parseInt(inputAge.value);
    if(age < 25){
        result.textContent = "The're " + age + " yrs old and they're younger than Google";
    }
     else if(age == 25){
        result.textContent = "The're " + age + " yrs old and they're old as Google";
    }else if(age > 25){
        result.textContent = "The're " + age + " yrs old and they're older than google";
    }else{
        result.textContent = "Error";
    }

    console.log("Hello World");
});
