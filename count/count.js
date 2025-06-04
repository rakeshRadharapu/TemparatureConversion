const label = document.getElementById("label");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
let count = 0;

increment.onclick = function(){
    count++;
    label.textContent = count;  
}

decrement.onclick = function(){
    count--;
    label.textContent = count;  
}
reset.onclick = function(){
    count = 0;
    label.textContent = count;  
}