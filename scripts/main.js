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
            const userName = nameInput ? nameInput.value.trim() : "";

            if (userName === "") {
                alert("Please enter a name before submitting.");
            } else {
                alert("Thank you for the submission!");
                form.reset();
            }
        });
    }
});