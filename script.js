document.addEventListener('DOMContentLoaded', function() {


    


    
// Define an object to store user responses and initialize it with data from local storage
var userResponses = JSON.parse(localStorage.getItem('userResponses')) || {};

// Add event listeners to your radio buttons to store selected answers
var radioButtons = document.querySelectorAll('input[type=radio]');
radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('change', function () {
        if (this.checked) {
            // Store the selected answer in the userResponses object
            userResponses[this.name] = this.value;
            // Store user responses in localStorage
            localStorage.setItem("userResponses", JSON.stringify(userResponses));
        }
    });

    // Check if there is a stored response for this radio button and update it if necessary
    if (userResponses[radioButton.name] === radioButton.value) {
        radioButton.checked = true;
    }
});

   

   



let timeRemaining = parseInt(localStorage.getItem('timeRemaining')) || 7200; // 2 hours in seconds

function updateTimer() {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    document.getElementById('time').textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    if (timeRemaining <= 0) {
        alert('Time is up!');
        // Code to handle time-up scenario, e.g., submit the exam
        window.location.href = 'submitted.html';
    } else {
        timeRemaining--;
        localStorage.setItem('timeRemaining', timeRemaining); // Store updated timeRemaining in localStorage
    }
}

setInterval(updateTimer, 1000);

// script.js
// Initialize the count variable
var answeredQuestionsCount = 0;

// Function to update the answered questions count
function updateAnsweredQuestionsCount() {
    // Update the count in the HTML and store
    document.getElementById("answeredQuestions").textContent = answeredQuestionsCount;
    localStorage.setItem("answeredQuestionsCount", answeredQuestionsCount);
}

// Add event listeners to your radio buttons to update the count when an answer is selected

 // Define a set to store answered questions
 var answeredQuestions = new Set();

 // Retrieve answered questions from localStorage when the page loads
 var storedAnsweredQuestions = localStorage.getItem('answeredQuestions');
 if (storedAnsweredQuestions) {
     answeredQuestions = new Set(JSON.parse(storedAnsweredQuestions));
     // Update the answered questions count based on the stored data
     answeredQuestionsCount = answeredQuestions.size;
     updateAnsweredQuestionsCount();
 }

 // Add event listeners to your radio buttons to update the count when an answer is selected
 var radioButtons = document.querySelectorAll('input[type=radio]');
 radioButtons.forEach(function(radioButton) {
     radioButton.addEventListener('change', function() {
         const questionNumber = this.name;
         const selectedAnswer = this.value;
         
         // Check if the answer was already selected for this question
         if (!answeredQuestions.has(questionNumber)) {
             // If an answer is selected for the first time, increment the count
             answeredQuestionsCount++;
             // Update the count in the HTML
             updateAnsweredQuestionsCount();
             // Add the question to the answered questions set
             answeredQuestions.add(questionNumber);
             // Store answered questions in localStorage
             localStorage.setItem('answeredQuestions', JSON.stringify(Array.from(answeredQuestions)));
         }

         // Store the selected answer in the userResponses object
         userResponses[questionNumber] = selectedAnswer;
     });
 });


// Retrieve the count from localStorage when the page loads
var storedCount = localStorage.getItem("answeredQuestionsCount");
if (storedCount !== null) {
    // If there is a stored count, update the variable and the HTML
    answeredQuestionsCount = parseInt(storedCount);
    updateAnsweredQuestionsCount();
}


// Add this code in the event listener for radio button changes in index.html
radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
        if (this.checked) {
            const questionNumber = this.name;
            const selectedAnswer = this.value;
            // Save question number and selected answer in Local Storage
            localStorage.setItem(questionNumber, selectedAnswer);
            // If an answer is selected, increment the count
            
            // Call the function to update the count
            updateAnsweredQuestionsCount();
        }
    });
});


    // Retrieve the selected answer from Local Storage based on question number
    radioButtons.forEach(function(radioButton) {
        const questionNumber = radioButton.name;
        const selectedAnswer = localStorage.getItem(questionNumber);
        if (selectedAnswer === radioButton.value) {
            radioButton.checked = true;
        }
    });







// script.js
// Function to show unanswered questions in a popup
var answeredQuestions = new Set(JSON.parse(localStorage.getItem('answeredQuestions')) || []);
var unansweredQuestions = calculateUnansweredQuestions(answeredQuestions);
var questionsAnsweredCount = 0;

const unansweredQuestionsList = document.getElementById('unansweredQuestionsList');
const popupContainer = document.getElementById('popupContainer');
const viewUnansweredBtn = document.getElementById('viewUnansweredBtn');
const parentElement = document.body; // Change this to the appropriate parent element if needed

function calculateUnansweredQuestions(answeredQuestionsSet) {
    return Array.from({ length: 100 }, (_, i) => i + 1)
        .filter(questionNumber => !answeredQuestionsSet.has(`q${questionNumber}`));
}

function updateUnansweredQuestionsList() {
    unansweredQuestions = calculateUnansweredQuestions(answeredQuestions);
    if (unansweredQuestions.length > 0) {
        unansweredQuestionsList.textContent = unansweredQuestions.join(', ');
        popupContainer.style.display = 'block';
    } else {
        unansweredQuestionsList.textContent = 'You have answered all questions. Best of luck.';
        unansweredQuestionsList.style.color = ' rgb(146, 146, 146)'; 
        
        popupContainer.style.display = 'block';
    }
}

function updateLocalStorage() {
    localStorage.setItem('answeredQuestions', JSON.stringify(Array.from(answeredQuestions)));
    updateUnansweredQuestionsList(); // Update unanswered questions list whenever answeredQuestions is updated
}

function showUnansweredQuestions() {
    updateUnansweredQuestionsList();
}

function closePopup(event) {
    const target = event.target;
    if (target.id === 'popupContainer' || target.id === 'closeUnansweredBtn' || target.id === 'close-unanswered') {
        popupContainer.style.display = 'none';
    }
}

function checkQuestionsAnsweredCount() {
    
    if (answeredQuestionsCount >= 48) {
        viewUnansweredBtn.style.display = 'block'; // Display the button after 48 questions are answered
    }
}
if (answeredQuestionsCount >= 48) {
    viewUnansweredBtn.style.display = 'block'; // maintains the display of the button after 48 questions are answered
}


parentElement.addEventListener('click', checkQuestionsAnsweredCount);
viewUnansweredBtn.addEventListener('click', showUnansweredQuestions);
parentElement.addEventListener('click', closePopup);







// Function to scroll the page to the top
function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// Add event listener to the "Go to Top" button
var goToTopButton = document.querySelector('.gototopbutton');
goToTopButton.addEventListener('click', goToTop);







 // Add event listener for the "Reset Quiz" button
 var resetQuizButton = document.querySelector('#resetQuizButton');
 resetQuizButton.addEventListener('click', function() {
     // Clear stored answers from Local Storage and uncheck radio buttons
     radioButtons.forEach(function(radioButton) {
         const questionNumber = radioButton.name;
         localStorage.removeItem(questionNumber);
         radioButton.checked = false;
     });
 
     // Clear userResponses object
     userResponses = {};
 
     // Reset answered questions count to 0
     answeredQuestionsCount = 0;
     // Update the count in the HTML
     updateAnsweredQuestionsCount();
 
     // Reset timer to 2 hours (7200 seconds)
     localStorage.setItem('timeRemaining', 7200);
 
     // Redirect to index.html
     window.location.href = 'takexam.html';
 });






 
 
 
 
 







// Get the submit button by its id
var submitButton = document.getElementById('submitButton');

// Create Overlay Element
var overlay = document.createElement('div');
overlay.id = 'overlay';
document.body.appendChild(overlay);

// Create Confirmation Popup Dynamically
var confirmationPopup = createPopup('confirmationPopup', 'confirmationMessage', 'Cancel', 'OK');
document.body.appendChild(confirmationPopup.popup);

// Create Success Popup Dynamically
var successPopup = createPopup('successPopup', 'successMessage', null, 'OK');
document.body.appendChild(successPopup.popup);

// Add Click Event Listener to Submit Button
submitButton.addEventListener('click', function() {
    
    
    // Show Overlay
    overlay.style.display = 'block';

    // Show Confirmation Popup

    confirmationPopup.message.innerHTML = `<div class="submittalcross"> <div class="submitcross"><b>&times;</b></div> <div>You have answered '${answeredQuestionsCount}' out of '100' questions. You won't be able to re-take the exam once it is submitted. Do you want to submit anyway? </div></div><div><hr></div> `;

 
    confirmationPopup.popup.style.display = 'block';

    



    confirmationPopup.okButton.style.backgroundColor= '#056c9c';
    confirmationPopup.okButton.style.color= 'white';
    confirmationPopup.okButton.style.border= '1px solid #156c9c';
    confirmationPopup.okButton.style.padding= '6px';
    confirmationPopup.okButton.style.paddingLeft= '10px';
    confirmationPopup.okButton.style.paddingRight= '10px';
    confirmationPopup.okButton.style.borderRadius= '5px';
    confirmationPopup.okButton.style.cursor= 'pointer';
    
    
    
    
    confirmationPopup.cancelButton.style.padding= '6px';
    confirmationPopup.cancelButton.style.paddingLeft= '10px';
    confirmationPopup.cancelButton.style.paddingRight= '10px';
    confirmationPopup.cancelButton.style.marginRight= '5px';
    confirmationPopup.cancelButton.style.borderRadius= '5px';
    confirmationPopup.cancelButton.style.border= '1px solid grey';
    confirmationPopup.cancelButton.style.cursor= 'pointer';


    successPopup.okButton.style.backgroundColor= '#056c9c';
    successPopup.okButton.style.color= 'white';
    successPopup.okButton.style.border= 'none';
    successPopup.okButton.style.padding= '6px';
    successPopup.okButton.style.paddingLeft= '10px';
    successPopup.okButton.style.paddingRight= '10px';
    successPopup.okButton.style.borderRadius= '5px';
    successPopup.okButton.style.margin= '0px';
    successPopup.okButton.style.cursor= 'pointer';



    
const mediaQuery2 = window.matchMedia('max-width: 821px');
if (mediaQuery2.matches) {
    // Apply styles for screens with a maximum width of 768 pixels
    
    confirmationPopup.cancelButton.style.marginLeft= 'none';
    successPopup.okButton.style.marginLeft= 'none';
    // Add more styles as needed
}


    const mediaQuery = window.matchMedia('(min-width: 821px) and (max-width: 1700px)');
if (mediaQuery.matches) {
    // Apply styles for screens with a maximum width of 768 pixels
    
    confirmationPopup.cancelButton.style.marginLeft= '37vw';
    successPopup.okButton.style.marginLeft='22vw'
    
    // Add more styles as needed
}




    
    
    
    
    






    

    

    // OK Button in Confirmation Popup
    confirmationPopup.okButton.addEventListener('click', function() {
        // Close Confirmation Popup and Overlay
        confirmationPopup.popup.style.display = 'none';
        overlay.style.display = 'block';

        // Show Success Popup
        
        successPopup.message.innerHTML=`<div class="submittalcross"> <div class="submitcross"><b>&times;</b></div> <div>Your answers have been submitted successfully.</div> <div><hr></div> </div>`;
        successPopup.popup.style.margin = '2px';
        
        successPopup.popup.style.display = 'block';
        successPopup.popup.style.color = 'rgb(95, 95, 95)';

        // OK Button in Success Popup
        successPopup.okButton.addEventListener('click', function() {
            // Redirect to 'submitted.html' when OK button is clicked in Success Popup
            window.location.href = 'submitted.html';
        });

        
    });

    // Cancel Button in Confirmation Popup
    confirmationPopup.cancelButton.addEventListener('click', function() {
        // Close Confirmation Popup and Overlay when Cancel button is clicked
        confirmationPopup.popup.style.display = 'none';
        overlay.style.display = 'none';

    });
});

// Function to Create Popup Elements Dynamically
function createPopup(id, messageId, cancelButtonText, okButtonText) {
    var popup = document.createElement('div');
    popup.id = id;
    popup.className = 'popup';
    popup.style.display = 'none';

    var message = document.createElement('p');
    message.id = messageId;

    var cancelButton = createButton(cancelButtonText);
    var okButton = createButton(okButtonText);

    
    
    popup.appendChild(message);
    if (cancelButton) {
        popup.appendChild(cancelButton);
    }
    popup.appendChild(okButton);

    return {
        popup: popup,
        message: message,
        cancelButton: cancelButton,
        okButton: okButton
    };
}







// Function to Create Buttons Dynamically
function createButton(text) {
    if (!text) {
        return null;
    }

    var button = document.createElement('button');
    button.textContent = text;
    return button;
}


 // Get the next button element
    var nextButton = document.getElementById('next-button');

    // Add click event listener to the next button
    nextButton.addEventListener('click', function (event) {
        // Store user responses permanently in local storage
        localStorage.setItem('userResponses', JSON.stringify(userResponses));
        

        // If you want to allow the navigation to the next page after saving responses,
        // remove the preventDefault() line below.
        // event.preventDefault();
    });
      
    // ... (rest of the code remains unchanged)







});









