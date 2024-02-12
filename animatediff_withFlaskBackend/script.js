// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener for the "Generate Video" button
    document.getElementById('generateVideoButton').addEventListener('click', function () {
        // Show/hide the video container and download button based on video existence
        var videoContainer = document.getElementById('videoContainer');
        var generatedVideo = document.getElementById('generatedVideo');
        var downloadButton = document.getElementById('downloadButton');
        
        if (generatedVideo.src) {
            videoContainer.style.display = 'block';
            downloadButton.style.display = 'block';
        } else {
            videoContainer.style.display = 'none';
            downloadButton.style.display = 'none';
        }
        
        generatedVideo.src = "{{ video_url }}";
        generatedVideo.load();
        
        
    });
});
