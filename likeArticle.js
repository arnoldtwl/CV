// Script for the like button

/**
 * This code block initializes the 'likes' object with the like count for each article ID from localStorage if available, else starts with 0.
 * It creates an object with keys as article IDs and values as the corresponding like count.
 * If the like count exists in localStorage for the given ID, it parses the value to an integer and sets it as the value for the key.
 * If the like count does not exist in localStorage for the given ID, it sets the value for the key to 0.
 * @type {Object.<string, number>}
 */
let likes = {
    '1': localStorage.getItem('likes1') ? parseInt(localStorage.getItem('likes1')) : 0,
    '2': localStorage.getItem('likes2') ? parseInt(localStorage.getItem('likes2')) : 0,
    '3': localStorage.getItem('likes3') ? parseInt(localStorage.getItem('likes3')) : 0,
    '4': localStorage.getItem('likes4') ? parseInt(localStorage.getItem('likes4')) : 0,
}

/**
 * This code block initializes the 'liked' object with the liked status for each article ID from localStorage if available, else starts with false.
 * It creates an object with keys as article IDs and values as the corresponding liked status.
 * If the liked status exists in localStorage for the given ID, it sets the value for the key to the parsed boolean value of the stored string.
 * If the liked status does not exist in localStorage for the given ID, it sets the value for the key to false.
 * @type {Object.<string, boolean>}
 */
let liked = {
    '1': localStorage.getItem('liked1') === 'true',
    '2': localStorage.getItem('liked2') === 'true',
    '3': localStorage.getItem('liked3') === 'true',
    '4': localStorage.getItem('liked4') === 'true',
};

/**
 * This code block updates the like count for each article and disables the like button if the user has already liked the article.
 * It loops through an array of article IDs and gets the corresponding like count element using the ID.
 * If the element exists, it updates the text content with the like count and disables the like button if the user has already liked the article.
 * @param {string[]} likeCounts - An array of article IDs.
 * @returns {void}
 */
let likeCounts = ['1', '2', '3', '4'];
for (let id of likeCounts) {
    let likeCountElement = document.getElementById('likeCount' + id);
    if (likeCountElement) {
        likeCountElement.innerText = likes[id] + " Likes";
        if (liked[id]) {
            likeCountElement.style.pointerEvents = "none";
        }
    }
}


/**
 * This code block disables the like button for each article if the user has already liked the article.
 * It checks the liked status for each article ID and disables the like button if the status is true.
 * @returns {void}
 */
if (liked['1']) document.getElementById('likeCount1').style.pointerEvents = "none";  
if (liked['2']) document.getElementById('likeCount2').style.pointerEvents = "none";  
if (liked['3']) document.getElementById('likeCount3').style.pointerEvents = "none";  
if (liked['4']) document.getElementById('likeCount4').style.pointerEvents = "none";  

/**
 * This function toggles the like status for a given article ID.
 * If the user has not liked the article, it increments the like count, sets the liked status to true, and stores both values in localStorage.
 * If the user has already liked the article, it decrements the like count, sets the liked status to false, and stores both values in localStorage.
 * It then updates the like count element with the new like count.
 * @param {string} id - The ID of the article to like or unlike.
 * @returns {void}
 */
function likeArticle(id) {
    if (!liked[id]) {
        likes[id]++; // Increment the like count
        liked[id] = true; // Set the liked status to true
    } else {
        likes[id]--; // Decrement the like count
        liked[id] = false; // Set the liked status to false
    }

    localStorage.setItem('likes' + id, likes[id]); // Store the like count in localStorage
    localStorage.setItem('liked' + id, liked[id]); // Store the liked status in localStorage
    document.getElementById('likeCount' + id).innerText = likes[id] + " Likes"; // Update the like count element   
}
