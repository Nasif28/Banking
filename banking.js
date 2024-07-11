// Function Created
// to get data from input
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const amountValue = inputField.value;

    inputField.value = '';
    return amountValue;
}

// to update prevoius total deposit & withdraw
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const previousTotal = totalElement.innerText;
    totalElement.innerText = parseFloat(previousTotal) + parseFloat(amount);
}

// to get previous total balance
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    return parseFloat(previousBalanceTotal);
}

// to update new total balance
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = parseFloat(previousBalanceTotal) + parseFloat(amount);
    }
    else {
        balanceTotal.innerText = parseFloat(previousBalanceTotal) - parseFloat(amount);
    }
}



// calling functions
// Deposit add and Balance Update
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
});

// Withdraw add and Balance Update
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('You can not withdraw more than what you have in your account');
    }
});




