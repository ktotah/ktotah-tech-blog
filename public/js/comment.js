document.querySelector("#newComment").addEventListener("submit", event => {
  event.preventDefault();

  const comment = {
    comment_text: document.querySelector("#commentText").value,
    post_id: document.querySelector("#hiddenPostId").value,
  };

  fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(res => res.json())
  .then(data => {
    if (data) {
      location.reload();
    } else {
      alert("Failed to post comment.");
    }
  })
  .catch(err => console.error(err));
});
