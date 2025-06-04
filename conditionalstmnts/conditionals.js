const input1 = document.getElementById("input");
const button1 = document.getElementById("sub-btn");
const para = document.getElementById("para");
let age = 0;
button1.onclick = function(){
    age = input1.value;
    age = Number(age);
    if(age <= 18){
        para.textContent = `you are not allowed to use this site`;
    }
    else if(age > 18){
        para.textContent="you are allowed to use this site";
    }
}