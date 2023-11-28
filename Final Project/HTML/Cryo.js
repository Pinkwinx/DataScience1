function changeContent() {
    // Get the selected value from the dropdown
    var selectedValue = document.getElementById("myDropdown").value;

    // Define content for each page
    var pageContent = {
        'Ayaka': '<img src="Ayaka.png" alt="Image of Ayaka" width="200" height="200">',
        'Eula': '<img src="Eula.png" alt="Image of Eula" width="200" height="200">',
        'Ganyu': '<img src="Ganyu.png" alt="Image of Ganyu" width="200" height="200">',
        'Shenhe': '<img src="Shenhe.png" alt="Image of Shenhe" width="200" height="200">',
        'Wriothesley': '<img src="Wriothesley.png" alt="Image of Wriothesley" width="200" height="200">'
    };

    // Update the content based on the selected page
    document.getElementById("content").innerHTML = pageContent[selectedValue];
}