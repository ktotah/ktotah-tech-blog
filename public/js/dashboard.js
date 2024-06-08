document.addEventListener('DOMContentLoaded', () => {
    const quill = new Quill('#editor', {
      theme: 'snow',
    });
  
    const quillEdit = new Quill('#editorEdit', {
      theme: 'snow',
    });
  
    // Create new post
    document.getElementById('newPostForm').addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const title = document.getElementById('postTitle').value.trim();
        const content = document.getElementById('postContent').value.trim();
    
        if (title && content) {
          const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to create post');
          }
        }
      });
  
    // Edit post
    document.querySelectorAll('.edit-link').forEach((button) => {
      button.addEventListener('click', async (event) => {
        const id = event.target.getAttribute('data-id');
        const post = await fetch(`/api/posts/${id}`).then(res => res.json());
  
        document.getElementById('editPostTitle').value = post.title;
        quillEdit.root.innerHTML = post.content;
        document.getElementById('editPostForm').setAttribute('data-id', id);
        $('#editModal').modal('show');
      });
    });
  
    const editPostForm = document.getElementById('editPostForm');
    if (editPostForm) {
      editPostForm.addEventListener('submit', async (event) => {
        event.preventDefault();
  
        const title = document.getElementById('editPostTitle').value.trim();
        const content = quillEdit.root.innerHTML.trim();
        const id = editPostForm.getAttribute('data-id');
  
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
    }
  
    // Delete post
    document.querySelectorAll('.delete-link').forEach((button) => {
        button.addEventListener('click', async (event) => {
            event.preventDefault();

            const id = event.target.getAttribute('data-id');

            const response = await fetch(`/api/posts/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Failed to delete post');
            }
         });
    });
});
