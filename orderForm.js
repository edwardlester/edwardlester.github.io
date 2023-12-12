document.addEventListener('DOMContentLoaded', function() {
    
    var totalAmountDiv = document.getElementById('totalAmountDiv');

    document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from being submitted

        var totalAmount = 0;
        var prices = {
            item1: 10, // Update this value to the actual price of item1
            item2: 8,  // Update this value to the actual price of item2
            item3: 6,  // Update this value to the actual price of item2
            item4: 4,
            item5: 3,
        };

        for (var i = 1; i <= 5; i++) {
            var quantity = parseInt(document.getElementById('item' + i).value);
            if (quantity > 0) {
                totalAmount += quantity * prices['item' + i];
            }
        }

        totalAmountDiv.textContent = 'Total amount of your order: $' + totalAmount;
    });
});