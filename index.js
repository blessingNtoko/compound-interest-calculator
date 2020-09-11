// AccountValue = investment + investment * interest rate

function getAccountValue(principal, interestRate, afterYear) {
    return (principal * (Math.pow(1 + interestRate, afterYear))).toFixed(2);
}

function getTable () {
    let rate1 = document.getElementById('rate1');
    let rate2 = document.getElementById('rate2');
    let rate3 = document.getElementById('rate3');
    let rate4 = document.getElementById('rate4');
}