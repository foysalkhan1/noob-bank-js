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
    const currentDeposit = document.getElementById('currentDeposit').innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    document.getElementById('currentDeposit').innerText = totalDeposit;
    document.getElementById('depositInput').value = '';
    const currentBalance = document.getElementById('currentBal').innerText;
    const currentBalanceNumber =parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalance;
    document.getElementById('currentBal').innerHTML = totalBalance; 
})