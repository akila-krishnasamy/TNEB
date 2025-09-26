document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newConnectionForm');

    // Form validation
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (!form.checkValidity()) {
            event.stopPropagation();
            form.classList.add('was-validated');
            return;
        }

        // Collect form data
        const formData = new FormData(form);
        const applicationData = {
            personalInfo: {
                fullName: document.getElementById('fullName').value,
                mobile: document.getElementById('mobile').value,
                email: document.getElementById('email').value
            },
            address: {
                street: document.getElementById('address').value,
                city: document.getElementById('city').value,
                pincode: document.getElementById('pincode').value
            },
            connectionDetails: {
                type: document.getElementById('connectionType').value,
                loadRequired: document.getElementById('loadRequired').value
            }
        };

        // Show success message
        showSuccessMessage();
        
        // Reset form
        form.reset();
        form.classList.remove('was-validated');
    });

    function showSuccessMessage() {
        const successAlert = document.createElement('div');
        successAlert.className = 'alert alert-success alert-dismissible fade show mt-3';
        successAlert.innerHTML = `
            <strong>Success!</strong> Your application has been submitted successfully. 
            Your application reference number is: TNB${Date.now().toString().slice(-6)}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        form.parentElement.insertBefore(successAlert, form);
    }

    // File size validation
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => {
        input.addEventListener('change', function() {
            const file = this.files[0];
            const maxSize = 5 * 1024 * 1024; // 5MB

            if (file && file.size > maxSize) {
                alert('File size should not exceed 5MB');
                this.value = '';
            }
        });
    });

    // Load calculation based on connection type
    const connectionType = document.getElementById('connectionType');
    const loadRequired = document.getElementById('loadRequired');

    connectionType.addEventListener('change', function() {
        switch(this.value) {
            case 'domestic':
                loadRequired.min = '0.5';
                loadRequired.max = '10';
                break;
            case 'commercial':
                loadRequired.min = '2';
                loadRequired.max = '50';
                break;
            case 'industrial':
                loadRequired.min = '5';
                loadRequired.max = '100';
                break;
        }
    });
});