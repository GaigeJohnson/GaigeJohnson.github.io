const form = document.querySelector("form");

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

