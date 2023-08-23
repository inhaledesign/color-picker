window.onload = function() {
    initColorPicker();
};

function initColorPicker() {
    let colorBox = document.getElementById("color-box");
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    };

    let colorPickers = document.getElementsByClassName("picker");
    setColorPicketEventListeners(colorPickers, colorBox, rgb)
}

function setColorPicketEventListeners(elements, colorBox, color) {
    let pickerCount = elements.length;
    for(let i = 0; i < pickerCount; i++) {
        let currentPicker = elements[i];
        currentPicker.addEventListener('change', () => {
            setElementBackgroundColor(colorBox, color);
            setDisplayValues(color);
        });
    }

}

function setElementBackgroundColor(colorBox,    color) {
    let rgbValue = [color.red.value, color.green.value, color.blue.value].join(',');
    colorBox.style.backgroundColor = "rgb(" + rgbValue + ")";
    console.log("RGB: ", rgbValue);
}

function setDisplayValues(colors) {
    let redVal = document.getElementById("redVal");
    let greenVal = document.getElementById("greenVal");
    let blueVal = document.getElementById("blueVal");

    redVal.innerText = colors.red.value;
    greenVal.innerText = colors.green.value;
    blueVal.innerText = colors.blue.value;
}
