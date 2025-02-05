document.addEventListener("DOMContentLoaded", function () {
    const movies = [
        {
            title: "Movie Title 1",
            description: "A brief description of Movie 1.",
            videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            poster: "https://via.placeholder.com/150"
        },
        {
            title: "Movie Title 2",
            description: "A brief description of Movie 2.",
            videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            poster: "https://via.placeholder.com/150"
        },
        {
            title: "Movie Title 3",
            description: "A brief description of Movie 3.",
            videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            poster: "https://via.placeholder.com/150"
        }
    ];

    const moviesContainer = document.getElementById("movies");

    // Loop through the movies and create HTML for each
    movies.forEach(function (movie) {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");

        movieElement.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.description}</p>
            <a href="${movie.videoLink}" target="_blank">Watch Now</a>
        `;
        moviesContainer.appendChild(movieElement);
    });
});
