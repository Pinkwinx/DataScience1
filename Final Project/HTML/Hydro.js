function changeContent() {
    // Get the selected value from the dropdown
    var selectedValue = document.getElementById("myDropdown").value;

    // Define content for each page
    var pageContent = {
        'Ayato': '<img src="Ayato.png" alt="Image of Ayato" width="200" height="200">',
        'Kokomi': '<img src="Kokomi.png" alt="Image of Kokomi" width="200" height="200">',
        'Neuvillette': '<img src="Neuvillette.png" alt="Image of Neuvillette" width="200" height="200">',
        'Nilou': '<img src="Nilou.png" alt="Image of Nilou" width="200" height="200">',
        'Tartaglia': '<img src="Tartaglia.png" alt="Image of Tartaglia" width="200" height="200">',
        'Yelan': '<img src="Yelan.png" alt="Image of Yelan" width="200" height="200">'
    };

    // Update the content based on the selected page
    document.getElementById("content").innerHTML = pageContent[selectedValue];
}