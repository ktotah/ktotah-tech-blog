document.querySelector("#signup").addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = document.querySelector("#signupUsername").value.trim();
  const email = document.querySelector("#signupEmail").value.trim();
  const password = document.querySelector("#signupPassword").value.trim();

  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  const userObj = {
    username: document.querySelector("#signupUsername").value,
    email: document.querySelector("#signupEmail").value,
    password: document.querySelector("#signupPassword").value,
  };

  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    console.log("Signed up successfully");
    location.href = "/dashboard";
  } else {
    const result = await response.json();
    alert(result.message || "Sign up failed, please try again!");
  }
});
