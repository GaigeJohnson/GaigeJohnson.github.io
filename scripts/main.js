const form = document.querySelector("form");
const toggleBtn = document.querySelector("#dark-mode-toggle");
const body = document.body;

toggleBtn.addEventListener("click", function() {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "Switch to Light Mode";
    } else {
        toggleBtn.textContent = "Switch to Dark Mode";
    }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (userName === "") {
        alert("Please enter a name before submitting.");
    }
    else {
        alert("Thank you form the submission.")
        
        form.reset();
    }
});

