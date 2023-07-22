// Variables for the form
// Check if "saveForLater" data already exists in localStorage
if (!localStorage.getItem('saveForLater')) {
    localStorage.setItem('saveForLater', JSON.stringify([]));
}

// Function to save item for later
function saveForLater(itemId) {
    let saveForLaterItems = JSON.parse(localStorage.getItem('saveForLater'));

    // get the element and its HTML content
    let element = document.getElementById(itemId);
    if (!element) {
        alert('Item not found');
        return;
    }

    let content = element.outerHTML;

    // create an object to hold the item id and its HTML content
    let item = {
        id: itemId,
        content: content
    };

    // Check if item already saved for later
    let existingItem = saveForLaterItems.find(item => item.id === itemId);
    if (existingItem) {
    alert('Item already saved for later');
    return;
    }

    // Add the new item
    saveForLaterItems.push(item);

    // Save back to localStorage
    localStorage.setItem('saveForLater', JSON.stringify(saveForLaterItems));

    // Alert the user that the item has been saved
    alert("Item saved for later. You have " + saveForLaterItems.length + " item(s) in your folder.");
}

// Function to get all items saved for later
function getSaveForLaterItems() {
    let saveForLaterItems = JSON.parse(localStorage.getItem('saveForLater'));

    // Convert the content strings back to HTML elements
    saveForLaterItems.forEach(item => {
        let element = document.createElement('div');
        element.innerHTML = item.content;
        item.content = element.firstChild
    });

    return saveForLaterItems;
}
