let balance = 0.00;

document.getElementById('transaction-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (!amount || amount <= 0) {
        document.getElementById('response').innerText = 'Please enter a valid amount.';
        return;
    }

    if (type === 'deposit') {
        balance += amount;
    } else if (type === 'withdrawal') {
        if (amount > balance) {
            document.getElementById('response').innerText = 'Insufficient funds for withdrawal.';
            return;
        }
        balance -= amount;
    }

    document.getElementById('balance').innerText = balance.toFixed(2);
    document.getElementById('response').innerText = `Transaction successful: ${type} of $${amount.toFixed(2)}`;
    document.getElementById('transaction-form').reset();
});
