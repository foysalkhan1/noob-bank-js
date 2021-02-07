// Login Button Event Handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const trxArea = document.getElementById('trx-area');
    trxArea.style.display = 'block';
});
// Deposit Event Handler
const depositBtn = document.getElementById('deposit');
depositBtn.addEventListener('click', function(){
    const depositNumber = inputTextUpdate('depositInput');
    document.getElementById('depositInput').value = '';
    spanTextUpdate('currentDeposit', depositNumber);
    spanTextUpdate('currentBal', depositNumber);
})
//Withdraw Event Handler
const witdhrawBtn = document.getElementById('withdraw');
witdhrawBtn.addEventListener('click', function () {
    const withdrawNumber = inputTextUpdate('withdrawInput');
    spanTextUpdate('currentWithdraw', withdrawNumber);
    spanTextUpdate('currentBal', -1 * withdrawNumber);
    document.getElementById('withdrawInput').value = '';
})
// Functions
function inputTextUpdate(id) {
    const withdrawAmount = document.getElementById(id).value;
    const withdrawNumber = parseFloat(withdrawAmount);
    return withdrawNumber;
}
function spanTextUpdate(id, depositNumber) {
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber =parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerHTML = totalBalance; 
}
