document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const fullNameInput = document.querySelector('input[name="fullname"]');
    const emailInput = document.querySelector('input[name="email"]');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const fullName = fullNameInput.value.trim();
      const email = emailInput.value.trim();
  
      if (!fullName || !email) {
        alert('Please fill in all fields.');
        return;
      }
  
      alert(`Thank you for your submission, ${fullName}! We will contact you at ${email}.`);
  
      fullNameInput.value = '';
      emailInput.value = '';
    });
  });