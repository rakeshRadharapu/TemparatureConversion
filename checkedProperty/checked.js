const checkbox = document.getElementById("checkbox");
const phonepay = document.getElementById("radio");
const googlepay = document.getElementById("radio1");
const paytm = document.getElementById("radio2");
const button = document.getElementById("sub-btn");
const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");

button.onclick = function(){
    if(checkbox.checked){
        para1.textContent = "You are subscribed";
    }
    else{
        para1.textContent = "You are not subscribed yet!";
    }
    if(phonepay.checked){
        para2.textContent = "you are paying with phonepay";
    }
    else if(googlepay.checked){
         para2.textContent = "you are paying with googlepay";
    }
    else if(paytm.checked){
         para2.textContent = "you are paying with paytm";
    }
    else{
        para2.textContent = "you are not selected any payment method";
    }
    
}