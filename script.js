const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // TO DO: Add authentication logic here
  // For now, just log the username and password to the console
  console.log(`Username: ${username}, Password: ${password}`);
});
