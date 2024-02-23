const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById('removeBtn');
const mainPage = document.querySelector(".main-page");
let cardCounter = 0;

// all for the add button

addBtn.addEventListener('click', function(){
    // so that you can only have a max of 30 classes
    cardCounter += 1;
    if (cardCounter > 30) {
        newClassCard = null
    }
    const newClassCard = document.createElement('div');
    newClassCard.classList.add('class-card');

    // create the school class icon variable
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-school", "fa-5x");
    icon.style.color = "#6054b8";


    // make it so user can add text to class name
    const className = document.createElement('p')
    className.contentEditable = true;
    className.textContent = "New Class"; // Default name
    className.classList.add("editable");

    // add the school class icon
    // and add the users text that was inputed 
    newClassCard.appendChild(icon);
    newClassCard.appendChild(className);
    mainPage.appendChild(newClassCard);
    

    className.addEventListener('keydown', function(event){
        if (event.key === 'Enter'){
            if (className.textContent.trim() === ''){
                // If class name is empty, remove the class card
                mainPage.removeChild(newClassCard);
            }
        }
    });
    className.addEventListener("blur", function() {
        if (className.textContent.trim() === "") {
            // If class name is empty, remove the class card
            mainPage.removeChild(newClassCard);
        }
    });
});


removeBtn.addEventListener('click', function(){
    
})
