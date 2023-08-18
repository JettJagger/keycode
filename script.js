document.addEventListener('DOMContentLoaded', () => {
    let keyValue = document.getElementById('keyValue');
    let keyCode = document.getElementById('keyCode');
    let charCode = document.getElementById('charCode');

// brings up key/character code/value when key is pressed 
    document.addEventListener('keypress', (event) => {
        keyValue.textContent = "Key Value: " + event.key;
        keyCode.textContent = "Key Code: " + event.code;
        charCode.textContent = "Char Code: " + event.charCode;
    });
});
