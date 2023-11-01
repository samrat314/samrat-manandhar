document.addEventListener('DOMContentLoaded', () => {
    const takeExamButton = document.querySelector('.bluebuttonganglog');

    function showPleaseWaitPopup() {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        
        const waitPopup = document.createElement('div');
        waitPopup.className = 'popup';
        waitPopup.innerText = 'Please Wait...';

        document.body.appendChild(overlay);
        document.body.appendChild(waitPopup);

        setTimeout(() => {
            // this will hide the "Please Wait..." popup
            document.body.removeChild(waitPopup);

            // Show the dynamically appearing container
            const container = document.createElement('div');
            container.className = 'containersamton';

            const warningText = document.createElement('div');
            warningText.className = 'samrat';
            warningText.innerText = 'The page at http://localhost says:';
            container.appendChild(warningText);

            // Warning message
            const warningBox = document.createElement('div');
            warningBox.className = 'warning-box';
            warningBox.innerHTML = '<div class="samton"><span class="warn warning"></span><span>Your examination has not started yet.</div></span>';
            container.appendChild(warningBox);

            // OK button for the warning message
            const okButton = document.createElement('button');
            okButton.innerText = 'OK';
            okButton.addEventListener('click', () => {
                // Show the alert message
                alert('This was just to show you that, This type of alert popup will appear if you press "Take Examination" button before your exam time has begun.                                                                                                            Now you can press "Take Examination" to proceed to exams.');
                
                // Remove the overlay, popups, and container functionality
                document.body.removeChild(container);
                document.body.removeChild(overlay);

                // Enable the "Take Examination" button functionality
                takeExamButton.addEventListener('click', () => {
                    // Redirect to question.html when the button is clicked
                    window.location.href = 'questions1.html';
                });
            });
            container.appendChild(okButton);

            document.body.appendChild(container);
        }, 1000);
    }

    takeExamButton.addEventListener('click', showPleaseWaitPopup);
});
