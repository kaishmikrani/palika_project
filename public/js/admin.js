document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");

    forms.forEach((form) => {
        form.addEventListener("submit", () => {
            const submitButton = form.querySelector("button[type=submit]");
            if (submitButton) submitButton.disabled = true;
        });
    });
});
