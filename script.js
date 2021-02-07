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
    const depositAmount = document.getElementById('depositInput').value;
    const depositNumber = parseFloat(depositAmount);
    document.getElementById('depositInput').value = '';
    spanTextUpdate('currentDeposit', depositNumber);
    spanTextUpdate('currentBal', depositNumber);
})
function spanTextUpdate(id, depositNumber) {
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber =parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerHTML = totalBalance; 
}