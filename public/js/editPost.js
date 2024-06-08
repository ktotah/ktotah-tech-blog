document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('editPostForm').addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const title = document.getElementById('editPostTitle').value.trim();
      const content = document.getElementById('editPostContent').value.trim();
      const id = event.target.getAttribute('data-id');
  
      if (title && content) {
        const response = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ title, content }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to update post');
        }
      }
    });
});
  