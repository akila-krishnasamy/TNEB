// Handle form submissions
document.addEventListener('DOMContentLoaded', function() {
    // SMS Subscription
    const smsForm = document.querySelector('.sms-signup');
    if (smsForm) {
        smsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = smsForm.querySelector('input');
            if (input.value) {
                alert('Thank you for subscribing to SMS alerts!');
                input.value = '';
            }
        });
    }

    // Service buttons
    const serviceButtons = document.querySelectorAll('.service-card .btn');
    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const service = this.parentElement.querySelector('h3').textContent;
            console.log(`Service requested: ${service}`);
        });
    });

    // Learn More button
    const learnMoreBtn = document.querySelector('.hero .btn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            console.log('Learn more clicked');
        });
    }
});
function openCalculator() {
    let units = prompt("Enter your electricity usage in units:");
    if (units && !isNaN(units)) {
        units = parseFloat(units);
        let billAmount = calculateBill(units);
        alert(`Your estimated bill for ${units} units is ₹${billAmount}`);
    } else {
        alert("Please enter a valid number for units.");
    }
}

function calculateBill(units) {
    let bill = 0;
    
    if (units <= 100) {
        bill = units * 1.5;
    } else if (units <= 200) {
        bill = (100 * 1.5) + ((units - 100) * 2);
    } else if (units <= 500) {
        bill = (100 * 1.5) + (100 * 2) + ((units - 200) * 3);
    } else {
        bill = (100 * 1.5) + (100 * 2) + (300 * 3) + ((units - 500) * 6);
    }

    return bill.toFixed(2); // Return amount rounded to two decimal places
}
function submitComplaint() {
    // Hide confirmation initially
    document.getElementById("complaintConfirmation").style.display = "none";

    // Basic form validation
    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const complaintDetails = document.getElementById("complaintDetails").value;

    if (name && mobile && complaintDetails) {
        // Display confirmation message
        document.getElementById("complaintConfirmation").style.display = "block";

        // Clear form fields
        document.getElementById("complaintForm").reset();
    }
}

