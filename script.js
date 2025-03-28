const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const counterLabel = document.getElementById("counterLabel");
const multipleBtn = document.getElementById("multipleBtn");
let count = 0;
let multiplier = 1;

increaseBtn.onclick = function() {
    count+= multiplier;
    counterLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count-= multiplier ;
    counterLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    multiplier = 1;
    multipleBtn.textContent = "+1"
    counterLabel.textContent = count;
}

multipleBtn.onclick = function(){
    multiplier++;
    multipleBtn.textContent = "+" + multiplier ;
}
