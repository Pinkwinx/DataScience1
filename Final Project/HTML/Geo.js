function changeContent() {
    // Get the selected value from the dropdown
    var selectedValue = document.getElementById("myDropdown").value;

    // Define content for each page
    var pageContent = {
        'Albedo': '<img src="Albedo.png" alt="Image of Albedo" width="200" height="200">',
        'Itto': '<img src="Itto.png" alt="Image of Itto" width="200" height="200">',
        'Zhongli': '<img src="Zhongli.png" alt="Image of Zhongli" width="200" height="200">'
    };

    // Update the content based on the selected page
    document.getElementById("content").innerHTML = pageContent[selectedValue];
}