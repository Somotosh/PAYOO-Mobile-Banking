document.getElementById("add-money-btn").addEventListener("click",function(){
    // bank account get
    const bankAccaunt = getValueFromInput("add-money-bank");
    if(bankAccaunt == "Select a bank"){
        alert("please Select a bank");
        return;
    }

    // 2 -> get the bank account number
    const accountNo = getValueFromInput("add-money-number");
if(accountNo.length != 11){
    alert("Invalid account No")
    return;
}

// 3-> get amount

const amount = getValueFromInput("add-money-amount");

const newBalance= getBalance() + Number(amount);
const pin = getValueFromInput("add-money-pin");
if(pin =="1111"){
    alert(`Add money successfull ${amount}`);
    setBalance(newBalance);
}else{
    alert("Invalid Pin");
    return;
}


})