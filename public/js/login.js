document.querySelector("#login").addEventListener("submit", async (event) => {
  event.preventDefault();

  const userObj = {
    email: document.querySelector("#loginEmail").value,
    password: document.querySelector("#loginPassword").value,
  };

  const response = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    console.log("Logged in");
    location.href = "/dashboard";
  } else {
    const result = await response.json();
    alert(result.message || "Login failed, please try again!");
  }
});
