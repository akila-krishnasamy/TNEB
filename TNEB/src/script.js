document.addEventListener("DOMContentLoaded", () => {
    const customerBtn = document.getElementById("customerBtn");
    const employeeBtn = document.getElementById("employeeBtn");
    const customerForm = document.getElementById("customerForm");
    const employeeForm = document.getElementById("employeeForm");

    customerBtn.addEventListener("click", () => {
        customerForm.style.display = "block";
        employeeForm.style.display = "none";
    });

    employeeBtn.addEventListener("click", () => {
        employeeForm.style.display = "block";
        customerForm.style.display = "none";
    });
});
