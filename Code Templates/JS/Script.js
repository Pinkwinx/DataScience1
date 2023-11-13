
function button() {
    var button = document.createElement("button");
    button.innerHTML = "Dynamic Button";
    button.id = "dynamicButton";

    button.addEventListener("click", function () {
        transition();
    });
    document.body.appendChild(button);
}
function transition() {
    alert("Button Clicked!");
}
