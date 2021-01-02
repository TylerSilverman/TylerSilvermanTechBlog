console.log("made it to the lopcated in /js/login.js")

const loginFormHandler = async (event) => {
  console.log("login form handler being used")
    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    console.log("email")
    if (email && password) {
      console.log()
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        document.location.replace('/dashboard');
        alert('Failed to log in.');
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    console.log("signup form handler being used")
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      console.log("the username, password, and email saved for signup")
      const response = await fetch('/api/signupRoute', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {

        //add the alert back after fixing the dashboard route for signing up a new user
        document.location.replace('/dashboard');
        alert('Failed to sign up.');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
    
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);

    
  