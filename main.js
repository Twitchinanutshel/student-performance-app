const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById('removeBtn');
const mainPage = document.querySelector(".main-page");
let cardCounter = 0;



// all for the add button
addBtn.addEventListener('click', function(){
    let newClassCard = document.createElement('div');
    newClassCard.classList.add('class-card');
    const className = document.createElement('p');

    if (cardCounter < 15){
        cardCounter += 1
    } else if (cardCounter >= 15){
        newClassCard = null
    }

    className.addEventListener('keydown', function(event){
        if (event.key === 'Enter'){
            event.preventDefault();
            if (className.textContent.trim() === ''){
                // If class name is empty, remove the class card
                className.textContent = "New Class";
                cardCounter -= 1;
            }
        }
    });
    className.addEventListener("blur", function() {
        if (className.textContent.trim() === "") {
            // If class name is empty, remove the class card
            className.textContent = "New Class";
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
    removeIcon.style.color = "rgb(220, 0, 0)";
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
        card.classList.toggle('removeAnimation');
        if (closeIcon.style.display === 'none'){
            closeIcon.style.display = 'block';
        } else {
            closeIcon.style.display = 'none';
        }
    });
    document.addEventListener('click', function(event) {
        const target = event.target;
        const classCards = document.querySelectorAll('.class-card');
        
        if (!target.classList.contains('xmark') && target !== removeBtn) {
            classCards.forEach((card) => {
                const closeIcon = card.querySelector('.xmark');
                card.classList.remove('removeAnimation');
                closeIcon.style.display = 'none';
            });
        }
    });
    
});




const helpBtn = document.getElementById('help');
const helpLinksContainer = document.getElementById('helpLinksContainer');

helpBtn.addEventListener('click', function(){
    helpLinksContainer.classList.toggle('show'); 
});

const flag = document.getElementById('flag');
const overlay = document.getElementById('overlay')

flag.addEventListener('click', function(){
    overlay.classList.toggle('visible')

    document.addEventListener('click', function closeOverlay(event) {
        const isClickInsideOverlay = overlay.contains(event.target);

        if (!isClickInsideOverlay && event.target !== flag) {
            overlay.classList.add('visible');
        }
    });
    

})