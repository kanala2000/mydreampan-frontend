// ================= CUSTOMER LOGIN =================
document.addEventListener("DOMContentLoaded", () => {
  const customerForm = document.getElementById("customerLoginForm");

  if (customerForm) {
    customerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      localStorage.setItem("customerLoggedIn", "true");
      window.location.href = "/services.html";
    });
  }
});

// ================= LOGOUT =================
function logoutCustomer() {
  localStorage.removeItem("customerLoggedIn");
  window.location.href = "/customer-login.html";
}

// ================= LOGIN CHECK =================
function requireCustomerLogin() {
  if (!localStorage.getItem("customerLoggedIn")) {
    alert("Please login first");
    window.location.href = "/customer-login.html";
  }
}
