// Function to show/hide input field based on selection
function checkOption() {
    const selectBox = document.getElementById('phoneDigits');
    const otherInput = document.getElementById('otherInput');
    
    if (selectBox.value === 'other') {
        // Show the input field if "Other" is selected
        otherInput.style.display = 'block';
    } else {
        // Hide the input field if another option is selected
        otherInput.style.display = 'none';
    }
}

// Function to verify the user's selection or input
function verifySelection() {
    const selectBox = document.getElementById('phoneDigits');
    const customDigits = document.getElementById('customDigits').value;
    const correctAnswer = '96638';
    const verificationBox = document.getElementById('verificationBox');

    if (selectBox.value === correctAnswer) {
        alert('Correct! You can enter the website.');
        verificationBox.classList.add('hidden'); // Apply dissolve effect
        document.body.classList.add('clear-background'); // Remove blur effect
    } else if (selectBox.value === 'other') {
        if (customDigits === correctAnswer) {
            alert('Correct! You can enter the website.');
            verificationBox.classList.add('hidden'); // Apply dissolve effect
            document.body.classList.add('clear-background'); // Remove blur effect
        } else {
            alert('Incorrect answer. Please try again.');
        }
    } else {
        alert('Incorrect selection. Please try again.');
    }
}
