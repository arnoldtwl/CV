// Script for the index.html page to handle the genre form submission

// Handle the genre form submission
document.getElementById('genreForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behaviour

    // Get the selected genre
    let selectedGenre;
    let genreInputs = document.getElementsByName('genre');
    for (let i = 0; i < genreInputs.length; i++) {
        if (genreInputs[i].checked) {
            selectedGenre = genreInputs[i].value;
            break;
        }
    }

    // Store the selected genre in localStorage
    localStorage.setItem('favouriteGenre', selectedGenre);
    // Alert the user that the genre has been saved
    alert("Your favorite genre has been saved: " + selectedGenre);
});