
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");


document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var hiddenImage = document.getElementById('hiddenImage');
        hiddenImage.classList.remove('hidden');
    }, 60000); // Adjust the time in milliseconds (5000 = 5 seconds)
});
