document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('customerForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from being submitted

        var name = document.getElementById('name').value;
        var address = document.getElementById('address').value;
        var phoneNumber = document.getElementById('phoneNumber').value;
        var email = document.getElementById('email').value;

        // Validate the customer details
        if (!name || !address || !phoneNumber || !email) {
            alert('Please fill in all the customer details.');
            return;
        }

        // Generate an order number
        var orderNumber = Math.floor(Math.random() * 1000000);

        alert('Order submitted successfully! Your order number is ' + orderNumber);
    });
});