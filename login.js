document.addEventListener('DOMContentLoaded', () => {
    const keyboardLayouts = [
        [
            ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Bksp'],
            ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
            ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'","Enter"],
            ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/','Shift'],
            ['Accept', '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp', 'Cancel']
        ],
        [
            ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Bksp'],
            ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', "'","Enter"],
            ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift'],
            ['Accept', '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp', 'Cancel']
        ]
    ];

    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    const keyboard = document.getElementById('keyboard');

    let currentLayoutIndex = 0;
    let inputField = null;
    let inputValue = '';

    function createKeyboard(layout) {
        layout.forEach(row => {
            const rowElement = document.createElement('div');
            rowElement.className = 'keyboard-row';
            row.forEach(key => {
                const keyElement = document.createElement('button');
                keyElement.className = 'keyboard-key';
                keyElement.innerHTML = key;
                keyElement.addEventListener('click', (event) => {
                    event.stopPropagation();
                    handleKeyClick(key);
                });
                rowElement.appendChild(keyElement);
            });
            keyboard.appendChild(rowElement);
        });
    }

    

    function handleKeyClick(key) {
            if (key === 'Bksp') {
                inputValue = inputValue.slice(0, -1);
            } else if (key === 'tab') {
                inputValue += '    '; // Tab key inserts four spaces
            } else if (key === 'Enter') {
                inputValue += '\n';
            } else if (key === '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp') {
                inputValue += ' ';
            } else if (key === 'Shift') {
                currentLayoutIndex = 1 - currentLayoutIndex; // Toggle between layouts
                keyboard.innerHTML = ''; // Clear the current keyboard
                createKeyboard(keyboardLayouts[currentLayoutIndex]); // Create the new keyboard
                return; // Do not update the input field value for Shift key
            } else if (key === 'Accept') {
                // Clear previous data in localStorage
                localStorage.removeItem('inputValue');
                // Store the new input value in localStorage
                localStorage.setItem('inputValue', inputValue);
                // Hide the keyboard
                keyboard.classList.add('hidden1', 'hidden2');
                // Trigger a blur event on the input field to close the keyboard
                inputField.blur();
            } else if (key === 'Cancel') {
                inputValue = '';
                inputField.value = '';
                // Hide the keyboard
                keyboard.classList.add('hidden1', 'hidden2');
                // Trigger a blur event on the input field to close the keyboard
                inputField.blur();
            } else {
                inputValue += key;
            }
            
        
        
            if (inputField) {
                inputField.value = inputValue;
            }
    
    }

    function showKeyboard(input) {
        inputField = input;
        inputValue = inputField.value; // Initialize inputValue here
        keyboard.innerHTML = '';
        createKeyboard(keyboardLayouts[currentLayoutIndex]);
        keyboard.classList.remove('hidden1', 'hidden2');
    }

    function hideKeyboard() {
        keyboard.classList.add('hidden1', 'hidden2');
    }

    usernameInput.addEventListener('mousedown', (event) => {
        event.stopPropagation();
        showKeyboard(usernameInput);
    });

    passwordInput.addEventListener('mousedown', (event) => {
        event.stopPropagation();
        showKeyboard(passwordInput);
    });

    

    keyboard.addEventListener('click', (event) => {
        event.stopPropagation();
        if (event.target.classList.contains('keyboard-key')) {
            handleKeyClick(event.target.textContent);
        }
    });

    document.addEventListener('click', (event) => {
        if (event.target !== usernameInput && event.target !== passwordInput) {
            hideKeyboard();
        }
    });
    

    createKeyboard(keyboardLayouts[currentLayoutIndex]);
    keyboard.classList.add('hidden1', 'hidden2');
});




document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    const signInButton = document.querySelector('.bluebox');
    const cancelButton = document.querySelector('.orangebox');

    const overlay = document.createElement('div');
    overlay.className = 'overlay hidden';

    const popup = document.createElement('div');
    popup.className = 'popup hidden';
    popup.innerText = 'Please Wait...';

    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    signInButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the form submission by default

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Check if username or password is empty
        if (username.trim() === '' || password.trim() === '') {
            // Highlight input fields with red border
            usernameInput.style.border = '1px solid red';
            passwordInput.style.border = '1px solid red';
            return;
        }

        // Show the overlay and "Please Wait" popup
        overlay.style.display = 'block';
        popup.classList.remove('hidden');
        signInButton.disabled = true;
        cancelButton.disabled = true;

        // Redirect to takexam.html after 2 seconds
        setTimeout(() => {
            popup.classList.add('hidden');
            overlay.style.display = 'none';
            signInButton.disabled = false;
            cancelButton.disabled = false;
            window.location.href = 'takexam.html';
        }, 2000);

        // Store username and password in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    });

    cancelButton.addEventListener('click', () => {
        // Clear input fields and remove red border
        usernameInput.value = '';
        passwordInput.value = '';
        usernameInput.style.border = '';
        passwordInput.style.border = '';
    });

});




 
