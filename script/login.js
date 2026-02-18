console.log("login form")

document.getElementById("login-btn").addEventListener("click", function(){
    
    // 1- get the mobail number input
    const mobailInput = document.getElementById("input-number");
    const contactNumber = mobailInput.value;
    console.log(contactNumber);
    // 2- get the input pin
    const pinInput = document.getElementById("input-pin");
    const pin = pinInput.value;
    console.log(pin)

    // 3- mach pin & mobail number
    if(contactNumber =="01234567890" && pin =="1111"){
        alert("login Success");
        window.location.assign("./home.html")
    }else{
        alert("login Failed");
        return;
    }
})