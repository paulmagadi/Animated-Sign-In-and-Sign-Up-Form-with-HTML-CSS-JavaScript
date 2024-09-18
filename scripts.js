const leftPanel = document.querySelector('.left-panel');
const rightPanel = document.querySelector('.right-panel');

const signUpBtn = document.getElementById('sign-up');
const signInBtn = document.getElementById('sign-in');

const activeBgColor = "rgb(111, 5, 177)";

signUpBtn.addEventListener('click', () => {
    rightPanel.classList.add('slide-out');
    rightPanel.classList.remove('slide-in');

    leftPanel.classList.add('slide-in');
    leftPanel.classList.remove('slide-out');

    leftPanel.style.backgroundColor = activeBgColor;
})

signInBtn.addEventListener('click', () => {
    leftPanel.classList.add('slide-out');
    leftPanel.classList.remove('slide-in');

    rightPanel.classList.add('slide-in');
    rightPanel.classList.remove('slide-out');

    rightPanel.style.backgroundColor = activeBgColor;
})