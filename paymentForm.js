document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('paymentForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from being submitted

        var cardNumber = document.getElementById('cardNumber').value;
        var expiryDate = document.getElementById('expiryDate').value;
        var cvv = document.getElementById('cvv').value;

        // Validate the payment information
        if (!cardNumber || !expiryDate || !cvv) {
            showMessage('Please fill in all the payment information.');
            return;
        }

        // TODO: Add code to process the payment using a secure method

        showMessage('Payment submitted successfully! We will send you an email shortly for the delivery date and time. Thank you for choosing Meryenda.');
    });

    document.getElementById('messageBoxClose').addEventListener('click', function() {
        document.getElementById('messageBox').style.display = 'none';
    });
});

function showMessage(message) {
    document.getElementById('messageText').textContent = message;
    document.getElementById('messageBox').style.display = 'block';
}