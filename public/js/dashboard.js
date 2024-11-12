// public/js/dashboard.js

document.querySelector('#new-post-button').addEventListener('click', () => {
    document.querySelector('#post-form').style.display = 'block';
  });
  
  const newPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    const successMessage = document.querySelector('#success-message'); // Select the success message element
  
    if (title && content) {
      try {
        const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          successMessage.style.display = 'block'; // Show the "Published!" message
          document.querySelector('#new-post-form').reset(); // Clear the form fields
  
          // Hide the success message after a short delay (e.g., 3 seconds)
          setTimeout(() => {
            successMessage.style.display = 'none';
            document.location.replace('/dashboard'); // Refresh the dashboard to show the new post
          }, 3000);
        } else {
          const errorText = await response.text();
          console.error('Failed to create post:', errorText);
          alert('Failed to create post: ' + errorText);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error: Could not connect to the server. Please make sure the server is running.');
      }
    }
  };
  
  document.querySelector('#new-post-form').addEventListener('submit', newPostFormHandler);
  
  