function updateNote() {
    // 1. Get the text you typed in the box
    const input = document.getElementById("user-input");
    const newText = input.value;

    // 2. Get the specific paragraph inside the handwritten card
    const display = document.getElementById("handwritten-text");

    // 3. Swap the text
    if (newText.trim() !== "") {
        display.innerText = newText;
        input.value = ""; // Clear the box after updating
    } else {
        alert("Please write a note first!");
    }
}