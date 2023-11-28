function changeContent() {
    // Get the selected value from the dropdown
    var selectedValue = document.getElementById("myDropdown").value;

    // Define content for each page
    var pageContent = {
        'Alhaitham': '<img src="Alhaitham.png" alt="Image of Alhaitham" width="200" height="200">',
        'Baizhu': '<img src="Baizhu.png" alt="Image of Baizhu" width="200" height="200">',
        'Nahida': '<img src="Nahida.png" alt="Image of Nahida" width="200" height="200">',
        'Tighnari': '<img src="Tighnari.png" alt="Image of Tighnari" width="200" height="200">',
    };

    // Update the content based on the selected page
    document.getElementById("content").innerHTML = pageContent[selectedValue];
}