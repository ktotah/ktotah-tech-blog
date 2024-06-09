document.addEventListener('DOMContentLoaded', () => {
    if (!window.quillInitialized) {
        window.quill = new Quill('#editor', {
            theme: 'snow',
        });
        window.quillInitialized = true;
    }

    document.getElementById('editPostForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        
        // Check session
        const sessionCheck = await fetch('/api/checkSession').then(res => res.json());
        if (!sessionCheck.loggedIn) {
            alert('Your session has expired. Please log in again.');
            window.location.href = '/login';
            return;
        }

        const id = event.target.getAttribute('data-id');
        const title = document.getElementById('editPostTitle').value.trim();
        const content = window.quill.root.innerHTML.trim();

        if (title && content) {
            const response = await fetch(`/api/posts/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ title, content }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                window.location.replace('/dashboard');
            } else {
                alert('Failed to update post');
            }
        }
    });
});
