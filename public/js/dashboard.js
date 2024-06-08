document.addEventListener('DOMContentLoaded', () => {
    if (!window.quillInitialized) {
        window.quill = new Quill('#editor', {
            theme: 'snow',
        });
        window.quillInitialized = true;
    }

    // Create new post
    document.getElementById('newPostForm').addEventListener('submit', async (event) => {
        event.preventDefault();

        const title = document.getElementById('postTitle').value.trim();
        const content = window.quill.root.innerHTML.trim();

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
            window.quill.root.innerHTML = post.content;
            $('#editModal').modal('show');

            document.getElementById('editPostForm').addEventListener('submit', async (event) => {
                event.preventDefault();

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
                        $('#editModal').modal('hide');
                        document.location.replace('/dashboard');
                    } else {
                        alert('Failed to update post');
                    }
                }
            }, { once: true });
        });
    });

    // Delete post
    document.querySelectorAll('.delete-link').forEach((button) => {
        button.addEventListener('click', async (event) => {
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
