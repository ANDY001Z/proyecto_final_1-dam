const frases = [
    "¡Soy gusigom!",
    "¿Te apetece chuches?",
    "¡La vida es dulce!",
    "Cuando la cuenta atrás acaba apareceremos en la zona planificada~",
    "¡Te esperamos!",
    "¡Queremos traer tu diseño a la realidad!"
];

const movingImage = document.getElementById('movingImage');
const bubble = document.getElementById('bubble');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

let x = screenWidth - movingImage.width - 450;
let y = screenHeight - movingImage.height - 10; 
let speed = 0.2; 
let directionX = 0; 
let directionY = 0;
let rotationAngle = 0;
let hasRotated = false;

function moveImage() {
    x += speed * directionX;
    y += speed * directionY;

    if (directionX !== 0 || directionY !== 0) {
        x += speed * directionX;
        y += speed * directionY;

        if (x >= screenWidth - movingImage.width && !hasRotated) {
            rotationAngle += 90; 
            movingImage.style.transform = `rotate(${rotationAngle}deg)`; 
            hasRotated = true; 

            x = screenWidth - movingImage.width - 10; 
            directionX = 0; 
            directionY = 1; 
        }

        if (y >= screenHeight - movingImage.height && hasRotated) {
            rotationAngle += 90;
            movingImage.style.transform = `rotate(${rotationAngle}deg)`;
            hasRotated = false;

            y = screenHeight - movingImage.height - 10;
            directionY = 0;
            directionX = -1;
        }

        if (x <= 0 && !hasRotated) {
            rotationAngle += 90; 
            movingImage.style.transform = `rotate(${rotationAngle}deg)`;
            hasRotated = true;
            
            x = 10; 
            directionX = 0;
            directionY = -1;
        }

        if (y <= 0 && hasRotated) {
            rotationAngle += 90; 
            movingImage.style.transform = `rotate(${rotationAngle}deg)`; 
            hasRotated = false; 

            y = 10; 
            directionY = 0; 
            directionX = 1;
        }   

    }

    movingImage.style.left = x + 'px';
    movingImage.style.top = y + 'px';

    adjustBubblePosition();
}
function startMoving() {
    if (directionX === 0 && directionY === 0) {
        directionX = -1; 
        directionY = 0; 
    }
}

function adjustBubblePosition() {
    const imageRect = movingImage.getBoundingClientRect();
    
    const bubbleOffsetX = 10;
    const bubbleOffsetY = 1; 

    bubble.style.left = (imageRect.left + imageRect.width + bubbleOffsetX) + 'px';
    bubble.style.top = (imageRect.top + bubbleOffsetY) + 'px';

    if (parseInt(bubble.style.left) + bubble.offsetWidth > screenWidth) {
        bubble.style.left = (screenWidth - bubble.offsetWidth - 10) + 'px';
    }
}

movingImage.addEventListener('dblclick', startMoving);


function showBubble(event) {
    const randomFrase = frases[Math.floor(Math.random() * frases.length)];
    bubble.textContent = randomFrase;

    const imageRect = movingImage.getBoundingClientRect();
    bubble.style.left = (imageRect.left + imageRect.width / 2) + 'px';
    bubble.style.top = (imageRect.top - 30) + 'px';
    bubble.style.display = 'block';

    setTimeout(() => {
        bubble.style.display = 'none';
    }, 3000);
}

movingImage.addEventListener('click', showBubble);

setInterval(moveImage, 10);
