
const stars = document.querySelectorAll(".star");
const submitButton = document.getElementById("submit");
// const resultDiv = document.getElementById("result");

let selectedRating = 0;


stars.forEach((star) => {
    star.addEventListener("click", () => {
        const rating = parseInt(star.getAttribute("data-rating"));
        selectedRating = rating;
        updateStars();
    });
});

submitButton.addEventListener("click", () => {
    if (selectedRating === 0) {
        alert("Por favor, selecione uma avaliação.");
    } else {
        // Redirecionar o usuário para outra página
        window.location.href = "step2.html";
    }
});

function updateStars() {
    stars.forEach((star) => {
        const rating = parseInt(star.getAttribute("data-rating"));
        if (rating <= selectedRating) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });
}