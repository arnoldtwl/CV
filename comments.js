
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

    // Save the comment to localStorage.
    let storedComments = localStorage.getItem('comments' + currentArticleId);
    let comments = storedComments ? JSON.parse(storedComments) : [];
    comments.push(commentText);
    localStorage.setItem('comments' + currentArticleId, JSON.stringify(comments));


    let newComment = createCommentElement(commentText, currentArticleId, comments.length -1);

    // Add the comment element to the article
    document.getElementById('comments' + currentArticleId).appendChild(newComment);

    document.getElementById('commentText').value = ''; // Clear the comment text field

    modal.style.display = "none"; // Close the modal
});

// Load the comments from localStorage
window.onload = function () {
    for (let i = 1; i <= 5; i++) {
        // Clear the comments container
        document.getElementById('comments' + i).innerHTML = '';

        let storedComments = localStorage.getItem('comments' + i);
        let comments = storedComments ? JSON.parse(storedComments) : [];

        comments.forEach(function (comment, index) {
            // Create the comment element
            let newComment = createCommentElement(comment, i, index)
            
            // Add the paragraph element to the article
            document.getElementById('comments' + i).appendChild(newComment); 
        });
    }
}

function createCommentElement(comment, articleId, commentIndex) {
    // Create a div for the comment
    let commentDiv = document.createElement('div');
    commentDiv.className = 'commentDiv';

    // Create a paragraph for the comment text
    let commentPara = document.createElement('p');
    commentPara.textContent = comment;

    // Create a delete button
    let deleteButton = document.createElement('button');
    deleteButton.className = 'deleteButton'; // Add a CSS class to the deleteButton
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() {
        deleteComment(articleId, commentIndex)
    };

    // Append the comment paragraph and delete button to the comment div
    commentDiv.appendChild(commentPara);
    commentDiv.appendChild(deleteButton);

    return commentDiv

}

function deleteComment(articleId, commentIndex) {
    let storedComments = localStorage.getItem('comments', articleId);
    let comments = storedComments ? JSON.parse(storedComments) : [];

    // Remove the comment at the given index
    comments.splice(commentIndex, 1);

    // Save back to localStorage
    localStorage.setItem('comments' + articleId, JSON.stringify(comments));

    // Re-display the comments
    window.onload();
}


