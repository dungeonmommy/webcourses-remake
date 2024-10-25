// courseFiles.js

// Function to handle file upload
document.getElementById("uploadButton").addEventListener("click", function() {
    const files = document.getElementById("fileUpload").files;
    if (files.length > 0) {
        // Process each uploaded file (here just a placeholder logic)
        for (let i = 0; i < files.length; i++) {
            console.log("File uploaded: " + files[i].name);
            // Here you would add the uploaded file to your server or database
        }
    } else {
        alert("Please select files to upload.");
    }
});

// Function to handle file deletion (currently just for demo)
document.querySelectorAll("#filesTable .btn-danger").forEach(button => {
    button.addEventListener("click", function() {
        const row = this.closest("tr");
        row.remove(); // Remove the row from the table
        // Here you would also delete the file from your server or database
    });
});
