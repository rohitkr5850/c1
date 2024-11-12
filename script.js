const images = [
    "https://via.placeholder.com/600x400?text=Movie+1",
    "https://via.placeholder.com/600x400?text=Movie+2",
    "https://via.placeholder.com/600x400?text=Movie+3",
];
let currentIndex = 0;
let intervalId = null;

// Initialize the slideshow
function startSlideshow() {
    intervalId = setInterval(nextImage, 2000);
    displayImage(currentIndex);
}

function displayImage(index) {
    const imageElement = document.getElementById("slideshow-image");
    imageElement.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    displayImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    displayImage(currentIndex);
}

function pauseSlideshow() {
    clearInterval(intervalId);
}

// Event listeners for buttons
document.getElementById("next").addEventListener("click", nextImage);
document.getElementById("prev").addEventListener("click", prevImage);
document.getElementById("pause").addEventListener("click", pauseSlideshow);

document.getElementById("add-image").addEventListener("click", () => {
    const url = document.getElementById("image-url").value;
    const position = document.getElementById("image-position").value;
    
    if (url) {
        if (position && position >= 0 && position < images.length) {
            images.splice(position, 0, url);
        } else {
            images.push(url);
        }
        document.getElementById("image-url").value = "";
        document.getElementById("image-position").value = "";
    }
});

// Start the slideshow on load
window.onload = startSlideshow;
