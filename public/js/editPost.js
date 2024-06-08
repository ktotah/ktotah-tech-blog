document.addEventListener('DOMContentLoaded', () => {
    if (!window.quillInitialized) {
        window.quill = new Quill('#editor', {
            theme: 'snow',
        });
        window.quillInitialized = true;
    }

    document.getElementById('editPostForm').addEventListener('submit', async (event) => {
        event.preventDefault();
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
