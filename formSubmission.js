// Form submission script for the contact form in contact.html

// Variables for the form submission
const form = document.getElementById('myForm'); // The form element

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behaviour

    const formData = new FormData(form); // Create a new FormData object
    const data = Object.fromEntries(formData); // Convert the FormData object to an array

    async function submitForm() {
        try {
            const response = await fetch('https://formspree.io/f/mpzgzedv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Convert the array to JSON
            });
            const responseData = await response.json(); // Convert the response to JSON
            if (responseData.ok) {
                // If the form submission was successful
                alert('Thank you for your message. We will get back to you soon.');
                form.reset();
            } else {
                // If the form submission failed
                alert('Oops! Something went wrong. Please try again later.');
            }
        } catch (error) {
            console.log(error);
        }
    }
    submitForm();
});



