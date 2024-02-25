const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById('removeBtn');
const mainPage = document.querySelector(".main-page");
let cardCounter = 0;



// all for the add button
addBtn.addEventListener('click', function(){
    let newClassCard = document.createElement('div');
    newClassCard.classList.add('class-card');
    const className = document.createElement('p');

    if (cardCounter < 30){
        cardCounter += 1
    } else if (cardCounter >= 30){
        newClassCard = null
    }

    className.addEventListener('keydown', function(event){
        if (event.key === 'Enter'){
            if (className.textContent.trim() === ''){
                // If class name is empty, remove the class card
                mainPage.removeChild(newClassCard);
                cardCounter -= 1;
            }
        }
    });
    className.addEventListener("blur", function() {
        if (className.textContent.trim() === "") {
            // If class name is empty, remove the class card
            mainPage.removeChild(newClassCard);
            cardCounter -= 1;
        }
    });

    // create the school class icon variable
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-school", "fa-5x");
    icon.style.color = "#6054b8";

    // create icon for removing button
    const removeIcon = document.createElement('button');
    removeIcon.classList.add("fa-solid", "fa-xmark", "fa-2x", 'xmark');
    removeIcon.style.color = "black";
    removeIcon.style.display = 'none'

    removeIcon.addEventListener('click', function(){
        mainPage.removeChild(newClassCard)
        cardCounter -= 1
    })



    // make it so user can add text to class name
    className.contentEditable = true;
    className.textContent = "New Class"; // Default name
    className.classList.add("editable");

    // add the school class icon
    // and add the users text that was inputed
    newClassCard.appendChild(removeIcon);
    newClassCard.appendChild(icon);
    newClassCard.appendChild(className);
    mainPage.appendChild(newClassCard);
    


    console.log(cardCounter)
});



// all for remove button
removeBtn.addEventListener('click', function(){
    const classCards = document.querySelectorAll('.class-card');
    classCards.forEach((card) => {
        const closeIcon = card.querySelector('.xmark');
        card.classList.add('removeAnimation');
        closeIcon.style.display = 'block';

        document.addEventListener('click', function(event) {
            const target = event.target;
            if (!target.classList.contains('xmark') && target !== removeBtn) {
                classCards.forEach((card) => {
                    const closeIcon = card.querySelector('.xmark');
                    card.classList.remove('removeAnimation');
                    closeIcon.style.display = 'none';
                });
            }
        });
    });
});