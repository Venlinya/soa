document.addEventListener("DOMContentLoaded", () => {
    const linkStart = document.getElementById("link-start");
    const introScreen = document.getElementById("intro-screen");
    const mainContent = document.getElementById("main-content");

    // Handle LINK START click
    linkStart.addEventListener("click", () => {
        // Hide LINK START button
        linkStart.style.display = "none";

        // Create and play intro video
        const introVideo = document.createElement("video");
        introVideo.src = "imgs/intro-video.mp4";
        introVideo.autoplay = true;
        introVideo.muted = false;
        introVideo.controls = false;
        introVideo.style.position = "fixed";
        introVideo.style.top = "0";
        introVideo.style.left = "0";
        introVideo.style.width = "100vw";
        introVideo.style.height = "100vh";
        introVideo.style.objectFit = "cover";
        document.body.appendChild(introVideo);

        // When the video ends, transition to the main website
        introVideo.onended = () => {
            introVideo.remove();
            introScreen.style.display = "none";
            mainContent.classList.remove("hidden");
        };
    });
});
