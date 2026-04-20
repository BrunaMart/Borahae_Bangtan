fetch("/components/bg/bg.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("bg").innerHTML = data;
  });