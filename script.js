const input = document.getElementById('input');
const sequenceDisplay = document.querySelector('.sequence');
const form = document.querySelector('form');
const error = document.querySelector('.error');
let num;

function fibs(n){
    let prevNum = 1;
    let prevNum2 = 0;
    let currentNum;
    for (let i = 1; i <= n; i++){
        console.log(prevNum2);
        currentNum =  prevNum + prevNum2;
        prevNum2 = prevNum;
        prevNum = currentNum;
    }
    return prevNum2;
}

function fibsRec(num){
    if(num < 2){
        return num;
    }else{
        return fibsRec(num-1) + fibsRec(num-2);
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    num = input.value;
    sequenceDisplay.textContent = 'Fibonacci Sequence: ';
    displaySequence(num);
})

form.addEventListener("keyup", (e)=>{
    if(input.value < 1){
        showError();
    }else if(input.value > 40){
        showError();
    }else{
        error.style.display = 'none';
        return;
    }
})

function displaySequence(num){
    sequenceDisplay.style.display = 'block';
    for (let i = 0; i < num; i++) {
        sequenceDisplay.textContent += `${fibsRec(i)}, `;
    }

}

function showError(){
    error.style.display = 'block';
    if(input.value < 1){
        error.textContent = 'Dude... Come on... Enter a positive number...';
    }else{
        error.textContent = "Ay yo! Chill! My computer can't count that big... Try a smaller number";
    }
    
}
