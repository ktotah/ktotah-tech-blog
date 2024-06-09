let idleTimer;

function resetTimer() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(logout, 30 * 60 * 1000); // 30 minutes
}

function logout() {
  fetch('/api/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(() => {
    window.location.replace('/');
  })
  .catch(err => console.error(err));
}

document.onload = resetTimer;
document.onmousemove = resetTimer;
document.onkeydown = resetTimer;
document.onscroll = resetTimer;
document.onclick = resetTimer;
