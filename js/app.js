const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const movies = document.querySelectorAll(".movie-card");
const noResults = document.getElementById("noResults");

function searchMovies() {

    const searchText = searchInput.value.toLowerCase().trim();

    let found = false;

    movies.forEach(movie => {

        const title = movie
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (title.includes(searchText)) {
            movie.style.display = "block";
            found = true;
        } else {
            movie.style.display = "none";
        }

    });

    noResults.style.display = found ? "none" : "block";
}

searchBtn.addEventListener("click", searchMovies);

searchInput.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {
        searchMovies();
    }

});

const reviewButtons = document.querySelectorAll(".review-btn");

reviewButtons.forEach(button => {

    button.addEventListener("click", function() {

        const movie = this.dataset.movie;

        alert(
            `Próximamente podrás ver todas las reseñas de ${movie}.`
        );

    });

});

document
    .getElementById("loginBtn")
    .addEventListener("click", function() {

        alert(
            "El sistema de inicio de sesión estará disponible próximamente."
        );

    });