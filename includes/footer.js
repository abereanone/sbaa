fetch('/includes/footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('shared-footer').innerHTML = html;
  });