document.getElementById("cashout-btn").addEventListener("click", function(){
//     1- get the agent number & Validate 
   const cashOutNumberInput = document.getElementById("cashout-number");
   const cashOutNumber = cashOutNumberInput.value;
   if(cashOutNumber.length != 11 ){
    alert("Invalid Number")
    return;
   }
   
//     2- get the amount , validate, convert to number 
    const cashOutAmountInput = document.getElementById("cashout-amount");
    const cashOutAmount = cashOutAmountInput.value;
    // console.log(cashOutAmount,cashOutNumber)

//     3- get currect balance
   const balanceElement = document.getElementById("balance");
   const balance= balanceElement.innerText;
//    console.log(balance)

//    4- calculete new blance 
const newBalance = Number(balance) - Number(cashOutAmount);

if(newBalance < 0){
    alert("Invalid Amount");
    return;
}

//     5- get the pin and verify
const  cashOutPinInput =document.getElementById("cashout-pin");
const pin = cashOutPinInput.value;
if(pin ==="1111"){
    //     5-1 true : show an alert & set new balance 
    alert("cashout successfull");
    balanceElement.innerHTML = newBalance;
    // console.log(newBalance);

  }else{
      //     5-2 false : show anerror alert & return
      alert("Invalid PIN");
      return;

  }

 })