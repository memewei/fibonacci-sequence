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

function fibsRec(n){
    if(n < 2){
        return n;
    }else{
        return fibsRec(n-1) + fibsRec(n-2);
    }
}

let n = prompt('How many terms of the Fibonacci sequence would you like to see? : ');
while(n<0){
    n = prompt('Dude... Come on... Pick a positive number...');
}

for (let i = 0; i < n; i++) {
    console.log(fibsRec(i));
};

