document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');

  if (username === '' || password === '') {
    message.textContent = 'Please fill in both fields.';
  } else {
    message.style.color = 'green';
    message.textContent = `Welcome, ${username}!`;
    // You can redirect or process login here
  }
});
