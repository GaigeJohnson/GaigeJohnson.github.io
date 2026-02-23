document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const toggleBtn = document.querySelector("#dark-mode-toggle");
    const body = document.body;

    if (toggleBtn) {
        toggleBtn.addEventListener("click", function() {
            body.classList.toggle("dark-mode");
            if (body.classList.contains("dark-mode")) {
                toggleBtn.textContent = "Switch to Light Mode";
            } else {
                toggleBtn.textContent = "Switch to Dark Mode";
            }
        });
    }

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const nameInput = document.querySelector("#fname");
            const messageInput = document.querySelector("#message");

            const userName = nameInput ? nameInput.value.trim() : "";
            const userMessage = messageInput ? messageInput.value.trim() : "";

            if (userName === "" || userMessage === "") {
                alert("Please enter both a name and a message before submitting.");
            } else {
                alert("Thank you for the submission.");
                form.reset();
            }
        });
    }
});