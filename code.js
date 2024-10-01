document.getElementById('feedbackForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // Prevent the default form submission  

    // Get the values from the form  
    const name = document.getElementById('name').value;  
    const message = document.getElementById('message').value;  

    // Here you can handle the form submission, e.g., sending the data to a server  

    // Show thank you message and reset the form  
    document.getElementById('thankYouMessage').style.display = 'block';  
    this.reset();  
});

// Select all images with the class 'gallery-item' within the 'T-shirt' class  
const images = document.querySelectorAll('.T-shirt .gallery-item');

images.forEach((image) => {
    // On mousedown (when the image is pressed)  
    image.addEventListener('mousedown', () => {
        image.style.transform = 'scale(1.5)'; // Scale the image up  
        image.style.transition = 'transform 0.3s ease'; // Smooth transition  
    });

    // On mouseup (when the button is released)  
    image.addEventListener('mouseup', () => {
        image.style.transform = 'scale(1)'; // Scale the image back to original size  
    });

    // Prevent scaling if the mouse leaves the image while holding down  
    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)'; // Scale the image back to original size  
    });
});

(function () {
    emailjs.init("geniejamesarsenal6@gmail.com"); // Replace with your actual EmailJS user ID.  
})();

document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission  

    // Get form values  
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS  
    emailjs.send("service_2v3i0d6", "template_baf77on", {
        from_name: name,
        message: message
    })
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('thankYouMessage').style.display = 'block'; // Show thank you message  
            document.getElementById('feedbackForm').reset(); // Reset the form  
        }, function (error) {
            console.log('FAILED...', error);
        });
});  