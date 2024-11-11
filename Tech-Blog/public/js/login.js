const loginFormHandler = async (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Capture form input values
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    // Make a POST request to the login route
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // Redirect to the dashboard after successful login
      document.location.replace('/dashboard');
    } else {
      alert('Failed to log in. Please check your username and password.');
    }
  }
};

// Attach the form submission handler to the form element
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
