let questionNumber = 1;
let selectedMarks = '[1 marks]'; // Default selected marks option

// Define the correct answers array



    
// Define the correct answers array
let correctAnswers = [];

// Add event listeners to buttons
document.getElementById('btnA').addEventListener('click', () => addToCorrectAnswers('\'A\''));
document.getElementById('btnB').addEventListener('click', () => addToCorrectAnswers('\'B\''));
document.getElementById('btnC').addEventListener('click', () => addToCorrectAnswers('\'C\''));
document.getElementById('btnD').addEventListener('click', () => addToCorrectAnswers('\'D\''));

// Remove button event listener
document.getElementById('removeBtnkatta').addEventListener('click', removeLastAnswer);

// Function to add selected answer to correctAnswers array
function addToCorrectAnswers(answer) {
    correctAnswers.push(answer);
    updateCorrectAnswersDisplay();
}
// Function to remove last answer from correctAnswers array
function removeLastAnswer() {
    correctAnswers.pop();
    updateCorrectAnswersDisplay();
}
// Function to update correct answers display
function updateCorrectAnswersDisplay() {
    const container = document.getElementById('correct-answers-container');
    container.innerHTML = `<p>const correctAnswers = [ ${correctAnswers.join(', ')}, ]</p>`;
}





function updateQuestion() {
    const newQuestion = document.getElementById('questionInput').value;
    const optionA = document.getElementById('optionAInput').value;
    const optionB = document.getElementById('optionBInput').value;
    const optionC = document.getElementById('optionCInput').value;
    const optionD = document.getElementById('optionDInput').value;

    // Create a new div element for the question
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.id = `question${questionNumber}`;

    // Update question content based on selected marks option
    questionDiv.innerHTML = `
        <div class="question-number">
            <div><b>${questionNumber}. </b>${newQuestion}</div>
            <div style="color: rgb(73, 72, 72); font-size: small; text-indent: 22px;">${selectedMarks}</div>
            <br>
            <div class="answer-container">
                <label>
                    <input type="radio" name="q${questionNumber}" value="A">${optionA}
                </label><br><br>
                <label>
                    <input type="radio" name="q${questionNumber}" value="B">${optionB}
                </label><br><br>
                <label>
                    <input type="radio" name="q${questionNumber}" value="C">${optionC}
                </label><br><br>
                <label>
                    <input type="radio" name="q${questionNumber}" value="D">${optionD}
                </label><br><br>
            </div>
        </div>
    `;


    

    // Append the new question div to the container on the webpage
    const container = document.getElementById('question-container');
    container.appendChild(questionDiv);

    // Generate the updated HTML code
    const updatedHTMLCode = container.innerHTML;

    // Update the textarea with the updated HTML code
    document.getElementById('html-output').value = updatedHTMLCode;
    
    // Scroll the question container to the bottom to show the new question
    const questionContainer = document.getElementById('question-container');
    questionContainer.scrollTop = questionContainer.scrollHeight;


    
    // Determine the correct answer based on the question number
    const correctAnswer = correctAnswers[questionNumber - 1];


      
       const marks = (selectedMarks === '[1 marks]') ? 1 : 2;


   
    // Generate the JavaScript code for the new question using template literals
    const javascriptCode = `
    {
        questionNumber: ${questionNumber},
        questionText: '${newQuestion}',
        options: ['${optionA}', '${optionB}', '${optionC}', '${optionD}'],
        correctAnswer: ${correctAnswer},
        marks: ${marks}
    },
    `;

   



        // Create a new div element for the JavaScript code and append it to the java-container
        const codeDiv = document.createElement('div');
        codeDiv.classList.add('question-code');
        codeDiv.textContent = javascriptCode;
    
        // Append the codeDiv to the separate container for JavaScript code
        const codeContainer = document.getElementById('code-container');
        codeContainer.appendChild(codeDiv);

   

    questionNumber++;

}

















function clearInputs() {
    document.getElementById('questionInput').value = '';
    document.getElementById('optionAInput').value = '';
    document.getElementById('optionBInput').value = '';
    document.getElementById('optionCInput').value = '';
    document.getElementById('optionDInput').value = '';
}

function toggleMarksOption() {
    const marksSwitchButton = document.getElementById('marks-switch-button');
    
    // Toggle between 1M and 2M marks option
    selectedMarks = selectedMarks === '[1 marks]' ? '[2 marks]' : '[1 marks]';

    // Update button text and class for styling
    marksSwitchButton.textContent = selectedMarks;
    marksSwitchButton.classList.toggle('one-mark', selectedMarks === '[1 marks]');
    marksSwitchButton.classList.toggle('two-marks', selectedMarks === '[2 marks]');
}

function cancelPreviousQuestion() {
    // Decrement the question number
    questionNumber--;

    // Get the question container
    const questionContainer = document.getElementById('question-container');

    // Get the output container
    const outputContainer = document.getElementById('output-container');

    
          // Get the java container
    const codeContainer = document.getElementById('code-container');

    // Remove the last child element from both question container and java container
    if (questionContainer.lastChild) {
        questionContainer.removeChild(questionContainer.lastChild);
        // Remove the last created content from java container
        const codeChildElements = codeContainer.getElementsByClassName('question-code');
        if (codeChildElements.length > 0) {
            codeContainer.removeChild(codeChildElements[codeChildElements.length - 1]);
        }
    }

    // Generate the updated HTML code after removal
    const updatedHTMLCode = questionContainer.innerHTML;

    // Update the textarea with the updated HTML code after removal
    document.getElementById('html-output').value = updatedHTMLCode;

    // Scroll the question container to the bottom to show the updated question
    questionContainer.scrollTop = questionContainer.scrollHeight;
}







function copyToClipboard() {
    const htmlOutput = document.getElementById('html-output');
    htmlOutput.select();
    document.execCommand('copy');

    // Change button text to "Copied" and apply animation
    const copyButton = document.getElementById('copy-button');
    copyButton.textContent = 'Copied';
    copyButton.style.backgroundColor = '#ffd700'; // Yellow color

    // Reset button text and color after 2 seconds
    setTimeout(() => {
        copyButton.textContent = 'Copy';
        copyButton.style.backgroundColor = '#4caf50'; // Green color
    }, 9000);
}

function sweepHTML() {
    // Clear the HTML output area
    document.getElementById('html-output').value = '';
    document.getElementById('question-container').innerHTML = '';

    // Reset the copy button text and color to green
    const copyButton = document.getElementById('copy-button');
    copyButton.textContent = 'Copy';
    copyButton.style.backgroundColor = '#4caf50'; // Green color
}






/*A math keyboard will appear*/
const symbols = [

    '<sub>',
    '</sub>',
    '<sup>',
    '</sup>',
    '∫', // Integral
    '∑', // Summation
    '∩', // Intersection
    '∪', // Union
    '√', // Square root
    '∛', // Cube root
    '∜', // Fourth root
    '∞', // Infinity
    '∆', // Delta
    '∂', // Partial derivative
    '∇', // Nabla (Gradient)
    '≈', // Approximately equal to
    '≠', // Not equal to
    '≤', // Less than or equal to
    '≥', // Greater than or equal to
    '⊂', // Subset of
    '⊃', // Superset of
    '⊆', // Subset of or equal to
    '⊇', // Superset of or equal to

    '→', // Right arrow
    '←', // Left arrow
    '↑', // Up arrow
    '↓', // Down arrow
    '↔', // Left-right arrow
    '↕', // Up-down arrow
    '⇒', // Right double arrow
    '⇐', // Left double arrow
    '⇑', // Up double arrow
    '⇓', // Down double arrow
    '⇔', // Left-right double arrow
    'α', // Alpha (Greek letter)
    'β', // Beta (Greek letter)
    'γ', // Gamma (Greek letter)
    'Δ', // Delta (Greek letter)
    'ε', // Epsilon (Greek letter)
    'ζ', // Zeta (Greek letter)
    'η', // Eta (Greek letter)
    'θ', // Theta (Greek letter)
    'ι', // Iota (Greek letter)
    'κ', // Kappa (Greek letter)
    'λ', // Lambda (Greek letter)
    'μ', // Mu (Greek letter)
    'ν', // Nu (Greek letter)
    'ξ', // Xi (Greek letter)
    'π', // Pi (Greek letter)
    'ρ', // Rho (Greek letter)
    'σ', // Sigma (Greek letter)
    'τ', // Tau (Greek letter)
    'υ', // Upsilon (Greek letter)
    'φ', // Phi (Greek letter)
    'χ', // Chi (Greek letter)
    'ψ', // Psi (Greek letter)
    'ω',  // Omega (Greek letter)
    'Ω', // Ohm
    '°', // Degree sign
    'µ', // Micro sign
    'Ω', // Ohm (Resistance)
    'ϵ', // Curly epsilon
    'ϕ', // Curly phi
    '∠', // Angle
    '∴', // Therefore
    '∵', // Because
    '∮', // Contour integral
    '∰', // Double contour integral
    '∬', // Double integral
    '∭', // Triple integral
    '≡', // Equivalent to
    '≣', // Geometrically equivalent to
    '⋕', // Bowtie
    '⋘', // Much less than
    '⋙', // Much greater than
    '⊕', // Circled plus (Direct sum)
    '⊖', // Circled minus
    '⊗', // Circled times (Tensor product)
    '⊘', // Circled division
    '',
    
        'ʌ', // Open-mid back unrounded vowel (as in "cup")
        'ɑ', // Open back unrounded vowel (as in "father")
        'æ', // Near-open front unrounded vowel (as in "cat")
        'ɒ', // Open back rounded vowel (as in "thought")
        'ɔ', // Open-mid back rounded vowel (as in "law")
        'ə', // Schwa (mid-central vowel, as in "sofa")
        'ɛ', // Open-mid front unrounded vowel (as in "bed")
        'eɪ', // Diphthong: close-mid front unrounded vowel followed by close front unrounded vowel (as in "face")
        'iː', // Long close front unrounded vowel (as in "see")
        'ɪ', // Near-close near-front unrounded vowel (as in "kit")
        'oʊ', // Diphthong: close-mid back rounded vowel followed by close-mid front rounded vowel (as in "go")
        'ɔɪ', // Diphthong: open-mid back rounded vowel followed by close front unrounded vowel (as in "boy")
        'uː', // Long close back rounded vowel (as in "goose")
        'ʊ', // Near-close near-back rounded vowel (as in "book")
        'aɪ', // Diphthong: open front unrounded vowel followed by close front unrounded vowel (as in "my")
        'aʊ', // Diphthong: open front unrounded vowel followed by close-mid back rounded vowel (as in "how")
        'eə', // Diphthong: open-mid front unrounded vowel followed by open-mid front unrounded vowel (as in "pair")
        'ɪə', // Diphthong: near-close near-front unrounded vowel followed by open-mid front unrounded vowel (as in "fear")
        'ʊə', // Diphthong: near-close near-back rounded vowel followed by open-mid front unrounded vowel (as in "tour")
        'p', // Voiceless bilabial plosive (as in "pat")
        'b', // Voiced bilabial plosive (as in "bat")
        't', // Voiceless alveolar plosive (as in "top")
        'd', // Voiced alveolar plosive (as in "dog")
        'k', // Voiceless velar plosive (as in "cat")
        'g', // Voiced velar plosive (as in "go")
        'f', // Voiceless labiodental fricative (as in "fun")
        'v', // Voiced labiodental fricative (as in "vat")
        'θ', // Voiceless interdental fricative (as in "think")
        'ð', // Voiced interdental fricative (as in "this")
        's', // Voiceless alveolar fricative (as in "sit")
        'z', // Voiced alveolar fricative (as in "zip")
        'ʃ', // Voiceless postalveolar fricative (as in "ship")
        'ʒ', // Voiced postalveolar fricative (as in "measure")
        'h', // Voiceless glottal fricative (as in "hat")
        'm', // Voiced bilabial nasal (as in "mat")
        'n', // Voiced alveolar nasal (as in "not")
        'ŋ', // Voiced velar nasal (as in "sing")
        'l', // Voiced alveolar lateral approximant (as in "let")
        'r', // Voiced alveolar approximant (as in "red")
        'j', // Voiced palatal approximant (as in "yes")
        'w', // Voiced labiovelar approximant (as in "wet")
        'tʃ', // Voiceless postalveolar affricate (as in "chat")
        'dʒ', // Voiced postalveolar affricate (as in "judge")
        'hw', // Voiceless labialized velar approximant (as in "which")
        'ts', // Voiceless alveolar affricate (as in "cats")
        'dz', // Voiced alveolar affricate (as in "beds")
        'ŋg', // Velar nasal + velar plosive (as in "sing good")
        'ʍ', // Voiceless labialized velar approximant (as in "why")
        't̚', // No audible release (as in "cat" at the end of a syllable)
        'd̚' // No audible release (as in "red" at the end of a syllable)
   
    
];




const symbolKeyboard = document.getElementById('symbol-keyboard');

function attachSymbolButtons(inputBox) {
    symbolKeyboard.innerHTML = '';
    const symbolGrid = document.createElement('div');
    symbolGrid.classList.add('symbol-grid');

    symbols.forEach(symbol => {
        const button = document.createElement('button');
        button.classList.add('symbol-button');
        button.textContent = symbol;
        button.addEventListener('click', () => {
            inputBox.value += symbol;
        });
        symbolGrid.appendChild(button);
    });

    symbolKeyboard.appendChild(symbolGrid);
    symbolKeyboard.style.display = 'block';
}

function setupMathsButton(inputBox) {
    inputBox.addEventListener('click', () => {
        attachSymbolButtons(inputBox);
    });
}

const questionInput = document.getElementById('questionInput');
const optionAInput = document.getElementById('optionAInput');
const optionBInput = document.getElementById('optionBInput');
const optionCInput = document.getElementById('optionCInput');
const optionDInput = document.getElementById('optionDInput');

setupMathsButton(questionInput);
setupMathsButton(optionAInput);
setupMathsButton(optionBInput);
setupMathsButton(optionCInput);
setupMathsButton(optionDInput);












/*for the maths-button*/

const mathsButton = document.getElementById('maths-button');

function attachSymbolButtons(inputBox) {
    symbolKeyboard.innerHTML = '';
    const symbolGrid = document.createElement('div');
    symbolGrid.classList.add('symbol-grid');

    symbols.forEach(symbol => {
        const button = document.createElement('button');
        button.classList.add('symbol-button');
        button.textContent = symbol;
        button.addEventListener('click', () => {
            inputBox.value += symbol;
        });
        symbolGrid.appendChild(button);
    });

    symbolKeyboard.appendChild(symbolGrid);
    symbolKeyboard.style.display = 'block';
}

function hideMathKeyboard() {
    symbolKeyboard.style.display = 'none';
}

function showMathKeyboard(inputBox) {
    attachSymbolButtons(inputBox);
}

function toggleMathKeyboard() {
    if (symbolKeyboard.style.display === 'block') {
        hideMathKeyboard();
    } else {
        const activeElement = document.activeElement;
        if (activeElement.tagName === 'TEXTAREA' || (activeElement.tagName === 'INPUT' && activeElement.type === 'text')) {
            showMathKeyboard(activeElement);
        } else {
            alert('Please select an input box first.');
        }
    }
}

mathsButton.addEventListener('click', toggleMathKeyboard);




/*for the matrix-keyboard */
var matrixValues = [];

function generateMatrix() {
    var matrixSize = prompt("Enter matrix size (2 or 3):");
    var matrixContainer = document.getElementById("matrix-container");
    matrixContainer.innerHTML = ""; // Clear previous content

    matrixValues = [];

    if (matrixSize == 2 || matrixSize == 3) {
        var table = document.createElement("table");
        table.className = "matrix";
        var tbody = document.createElement("tbody");

        for (var i = 0; i < matrixSize; i++) {
            var row = document.createElement("tr");
            var rowValues = [];

            for (var j = 0; j < matrixSize; j++) {
                var cell = document.createElement("td");
                var input = document.createElement("input");
                input.type = "text";
                input.className = "matrix-input";
                cell.appendChild(input);
                row.appendChild(cell);
                rowValues.push(input);
            }

            tbody.appendChild(row);
            matrixValues.push(rowValues);
        }

        table.appendChild(tbody);
        matrixContainer.appendChild(table);
    } else {
        alert("Invalid matrix size. Please enter 2 or 3.");
    }
}
function generateHTML() {
    var output = document.getElementById("output");
    output.innerHTML = "";

    var htmlCode = '<table class="matrix">';
    for (var i = 0; i < matrixValues.length; i++) {
        htmlCode += '<tr>';
        for (var j = 0; j < matrixValues[i].length; j++) {
            htmlCode += '<td>' + matrixValues[i][j].value + '</td>';
        }
        htmlCode += '</tr>';
    }
    htmlCode += '</table></div>';

    output.textContent = htmlCode;
}


/*copy matrix code*/
        function copyToClipboard2() {
            var output = document.getElementById("output");
            var range = document.createRange();
            range.selectNode(output);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
            
        }







/*fraction functionality */
function generateFraction() {
    var numeratorInput = document.getElementById("numerator");
    var denominatorInput = document.getElementById("denominator");

    var numerator = numeratorInput.value;
    var denominator = denominatorInput.value;

    var fractionContainer = document.getElementById("fraction-container");
    fractionContainer.innerHTML = ""; // Clear previous content

    
        var fractionDiv = document.createElement("div");
        fractionDiv.className = "frac";

        var numeratorSpan = document.createElement("span");
        numeratorSpan.textContent = numerator;

        var symbolSpan = document.createElement("span");
        symbolSpan.className = "symbol";
        symbolSpan.textContent = "/";

        var denominatorSpan = document.createElement("span");
        denominatorSpan.className = "bottom";
        denominatorSpan.textContent = denominator;

        fractionDiv.appendChild(numeratorSpan);
        fractionDiv.appendChild(symbolSpan);
        fractionDiv.appendChild(denominatorSpan);

        fractionContainer.appendChild(fractionDiv);
   
}
function generateHTMLfrac() {
    var output = document.getElementById("outputfrac");
    output.innerHTML = "";

    var fractionContainer = document.getElementById("fraction-container");
    var fractionHTML = fractionContainer.innerHTML;
    output.textContent = fractionHTML;
}
function toggleFractionBox() {
    var fractionBox = document.getElementById("fractionBox");
    if (fractionBox.style.display === "none" || fractionBox.style.display === "") {
        fractionBox.style.display = "block";
    } else {
        fractionBox.style.display = "none";
    }
}
function toggleMatrixBox() {
    var matrixBox = document.getElementById("matrixBox");
    if (matrixBox.style.display === "none" || matrixBox.style.display === "") {
        matrixBox.style.display = "block";
    } else {
        matrixBox.style.display = "none";
    }
}



/* for the iframe button*/
const popupButton = document.getElementById('popupButton');
const popup = document.getElementById('popup');
const popupFrame = document.getElementById('popupFrame');
const closeButton = document.getElementById('closeButton');

popupButton.addEventListener('click', () => {
    popup.style.display = 'flex';
    popupFrame.src = 'https://www.imatheq.com/imatheq/com/imatheq/math-equation-editor.html'; // Replace this URL with the website you want to display
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});



// Get the element


var offsetX, offsetY, isDragging = false;

// Function to handle mouse down event
function onMouseDown(event) {
    isDragging = true;

    // Calculate the offset between mouse pointer and the top-left corner of the element
    offsetX = event.clientX - symbolKeyboard.getBoundingClientRect().left;
    offsetY = event.clientY - symbolKeyboard.getBoundingClientRect().top;
}

// Function to handle mouse move event
function onMouseMove(event) {
    if (isDragging) {
        // Update the position of the element based on mouse pointer
        symbolKeyboard.style.left = (event.clientX - offsetX) + "px";
        symbolKeyboard.style.top = (event.clientY - offsetY) + "px";
    }
}

// Function to handle mouse up event
function onMouseUp() {
    isDragging = false;
}

// Attach event listeners
symbolKeyboard.addEventListener("mousedown", onMouseDown);
document.addEventListener("mousemove", onMouseMove);
document.addEventListener("mouseup", onMouseUp);





// Example usage:
// Call addToCorrectAnswers(answer) with the selected answer after each question.
// For example: addToCorrectAnswers('A');

