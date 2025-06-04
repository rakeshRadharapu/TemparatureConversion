const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const button = document.getElementById("button");
let randomNum1;
let randomNum2;
let randomNum3;
button.onclick = function(){
    randomNum1 = Math.floor(Math.random() * 6);
    randomNum2 = Math.floor(Math.random() * 6);
    randomNum3 = Math.floor(Math.random() * 6);
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
    

}
