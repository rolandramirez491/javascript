
const randomNumbersArrays = Array.from({ length: 4 }, () => 
    Array.from({ length: 40 }, () => Math.floor(Math.random() * 101))
);

// Obtener referencias a los botones y al área de resultados
const reduceButton = document.getElementById('reduceButton');
const filterButton = document.getElementById('filterButton');
const mapButton = document.getElementById('mapButton');
const displayButton = document.getElementById('displayButton');
const randomNumbersDisplay = document.getElementById('randomNumbers');
const resultDisplay = document.getElementById('result');


function displayNumbers(arrays) {
    randomNumbersDisplay.innerHTML = arrays.map((array, index) => 
        `<p><strong>Arreglo ${index + 1}:</strong> ${array.join(', ')}</p>`
    ).join('');
}


function displayResult(text, results) {
    resultDisplay.innerHTML = results.map((result, index) => 
        `<p><strong>${text} - Arreglo ${index + 1}:</strong> ${result.join ? result.join(', ') : result}</p>`
    ).join('');
}

function handleReduce() {
    resultDisplay.innerHTML = ''; 
    const sums = randomNumbersArrays.map(array => 
        array.reduce((acc, num) => acc + num, 0)
    );
    displayResult('Suma total', sums);
}


function handleFilter() {
    resultDisplay.innerHTML = ''; 
    const evenNumbersArrays = randomNumbersArrays.map(array => 
        array.filter(num => num % 2 === 0)
    );
    displayResult('Números pares', evenNumbersArrays);
}


function handleMap() {
    resultDisplay.innerHTML = ''; 
    const squaredNumbersArrays = randomNumbersArrays.map(array => 
        array.map(num => num * num)
    );
    displayResult('Cuadrados de los números', squaredNumbersArrays);
}


displayNumbers(randomNumbersArrays);


function animateButton(button, speed) {
    let posX = Math.random() * window.innerWidth;
    let posY = Math.random() * window.innerHeight;
    let directionX = (Math.random() - 0.5) * 2; 
    let directionY = (Math.random() - 0.5) * 2; 

    function move() {
        posX += directionX * speed;
        posY += directionY * speed;


        if (Math.random() < 0.01) directionX = (Math.random() - 0.5) * 2;
        if (Math.random() < 0.01) directionY = (Math.random() - 0.5) * 2;


        if (posX <= 0 || posX >= window.innerWidth - button.offsetWidth) {
            directionX *= -1;
        }
        if (posY <= 0 || posY >= window.innerHeight - button.offsetHeight) {
            directionY *= -1;
        }

        button.style.transform = `translate(${posX}px, ${posY}px)`;

        requestAnimationFrame(move);
    }

    move();
}


animateButton(reduceButton, 0.5); 
animateButton(filterButton, 0.7); 
animateButton(mapButton, 1); 
animateButton(displayButton, 0.9);

reduceButton.addEventListener('click', handleReduce);
filterButton.addEventListener('click', handleFilter);
mapButton.addEventListener('click', handleMap);
displayButton.addEventListener('click', () => displayNumbers(randomNumbersArrays));
