// function submitForm() {
//     alert("functional"); // just a test
// }
function handleCheckboxChange(inputId) {
    var inputElement = document.getElementById(inputId);
    var checkboxId = "unknown" + inputId.charAt(0).toUpperCase() + inputId.slice(1);
    var checkboxElement = document.getElementById(checkboxId);

    if (checkboxElement.checked) {
        inputElement.disabled = true;
    } else {
        inputElement.disabled = false;
    }
}

function submitForm() {
    // Get input values

    
}

// function handleCheckboxChange(inputId) {
//     var inputElement = document.getElementById(inputId);
//     var checkboxId = "unknown" + inputId.charAt(0).toUpperCase() + inputId.slice(1);
//     var checkboxElement = document.getElementById(checkboxId);

//     if (checkboxElement.checked) {
//         inputElement.disabled = true;

//         updateUrlParameter(inputId, 'X');
//     } else {
//         inputElement.disabled = false;

//         updateUrlParameter(inputId, inputElement.value);
//     }
// }

// function updateUrlParameter(param, value) {
//     console.log(param + "=" + value);
// }

