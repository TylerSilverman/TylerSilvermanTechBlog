const logout = async (event) => {
  console.log("successfully logged out")
  event.preventDefault()
    const response = await fetch('/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Successfully Logged Out!');
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
  