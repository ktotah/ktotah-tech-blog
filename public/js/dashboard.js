document.addEventListener('DOMContentLoaded', () => {
    if (!window.quillInitialized) {
        window.quill = new Quill('#editor', {
            theme: 'snow',
        });
        window.quillInitialized = true;
    }

    const newPostButton = document.getElementById('newPostButton');
    const newPostForm = document.getElementById('newPostForm');

    newPostButton.addEventListener('click', () => {
        newPostButton.classList.add('d-none');
        newPostForm.classList.remove('d-none');
    });

    // Create new post
    document.getElementById('newPostForm').addEventListener('submit', async (event) => {
        event.preventDefault();

        // Check session
        const sessionCheck = await fetch('/api/checkSession').then(res => res.json());
        if (!sessionCheck.loggedIn) {
            alert('Your session has expired. Please log in again.');
            window.location.href = '/login';
            return;
        }

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
            // Check session
            const sessionCheck = await fetch('/api/checkSession').then(res => res.json());
            if (!sessionCheck.loggedIn) {
                alert('Your session has expired. Please log in again.');
                window.location.href = '/login';
                return;
            }

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
            // Check session
            const sessionCheck = await fetch('/api/checkSession').then(res => res.json());
            if (!sessionCheck.loggedIn) {
                alert('Your session has expired. Please log in again.');
                window.location.href = '/login';
                return;
            }

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
