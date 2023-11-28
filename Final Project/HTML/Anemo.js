function changeContent() {
    // Get the selected value from the dropdown
    var selectedValue = document.getElementById("myDropdown").value;

    // Define content for each page
    var pageContent = {
        'Kazuha': '<img src="Kazuha.png" alt="Image of Kazuha" width="200" height="200">',
        'Venti': '<img src="Venti.png" alt="Image of Venti" width="200" height="200">',
        'Wanderer': '<img src="Wanderer.png" alt="Image of Wanderer" width="200" height="200">',
        'Xiao': '<img src="Xiao.png" alt="Image of Xiao" width="200" height="200">'
    };

    // Update the content based on the selected page
    document.getElementById("content").innerHTML = pageContent[selectedValue];
}