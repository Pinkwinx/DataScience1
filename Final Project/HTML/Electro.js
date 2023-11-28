function changeContent() {
    // Get the selected value from the dropdown
    var selectedValue = document.getElementById("myDropdown").value;

    // Define content for each page
    var pageContent = {
        'Cyno': '<img src="Cyno.png" alt="Image of Cyno" width="200" height="200">',
        'Keqing': '<img src="Keqing.png" alt="Image of Keqing" width="200" height="200">',
        'Raiden': '<img src="Raiden.png" alt="Image of Raiden Shogun" width="200" height="200">',
        'Miko': '<img src="Miko.png" alt="Image of Yae Miko" width="200" height="200">',
    };

    // Update the content based on the selected page
    document.getElementById("content").innerHTML = pageContent[selectedValue];
}