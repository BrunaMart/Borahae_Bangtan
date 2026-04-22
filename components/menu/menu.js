fetch("/components/menu/menu.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("menu").innerHTML = data;

        const hamburger = document.querySelector(".hamburger");
        const nav = document.querySelector(".nav");
        
        hamburger.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    });

