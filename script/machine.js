console.log("machine add");


// machine  id -> input value

function getValueFromInput(id){

    const input = document.getElementById(id);
    const value = input.value;
    console.log(id,value);
    return value;

}
//  machine -> balance
function getBalance(){
    const balanceElement =document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("corrent balance",balance);
    return Number(balance)

}
// machine value ->set balance
function setBalance(value){
    const balanceElement = document.getElementById("balance")
    balanceElement.innerText=value

}

// machine id > hiddem all > show id
function showOnly(id){
    console.log("click here")
    const addMoney= document.getElementById("add-money");
    const cashOut= document.getElementById("cashout");
    addMoney.classList.add("hidden")
    cashOut.classList.add("hidden");
//   id element show korbe
   const selected= document.getElementById(id);
   selected.classList.remove("hidden");
}