
// Comments script
// Variables for the comment form
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

var currentArticleId; // The id of the article that the user is commenting on

// When the user clicks on the button, open the modal
function openCommentBox(articleId) {
    modal.style.display = "block";
    currentArticleId = articleId;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    // document.getElementById('commentForm').reset();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        // document.getElementById('commentForm').reset();
    }
};

// Add a comment to the article
document.getElementById('commentForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behaviour

    const commentText = document.getElementById('commentText').value; // Get the comment text
    let newComment = document.createElement('p'); // Create a new paragraph element

    // Add the comment text to the paragraph element
    newComment.textContent = commentText;

    // Add the paragraph element to the article
    document.getElementById('comments' + currentArticleId).appendChild(newComment);

    // Save the comment to localStorage.
    let storedComments = localStorage.getItem('comments' + currentArticleId);
    let comments = storedComments ? JSON.parse(storedComments) : [];
    comments.push(commentText);
    localStorage.setItem('comments' + currentArticleId, JSON.stringify(comments));

    document.getElementById('commentText').value = ''; // Clear the comment text field

    modal.style.display = "none"; // Close the modal
});

// Load the comments from localStorage
window.onload = function () {
    for (let i = 1; i <= 5; i++) {
        let storedComments = localStorage.getItem('comments' + i);
        let comments = storedComments ? JSON.parse(storedComments) : [];
        comments.forEach(function (comment) {
            let newComment = document.createElement('p'); // Create a new paragraph element
            newComment.textContent = comment; // Add the comment text to the paragraph element
            document.getElementById('comments' + i).appendChild(newComment); // Add the paragraph element to the article
        });
    }
}


// //////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////////////////



// ///////////////////////////////////////////////////////////////////////////////////////
// Variables for the comments





// ///////////////////////////////////////////////////////////////////////////////////////////


