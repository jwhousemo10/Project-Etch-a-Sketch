const container = document.getElementById('container');             // Get the container div
const resizeBtn = document.getElementById('resize-btn');            // Get the resize button

function createGrid(size) {                                         // Create a grid with the specified size 
    container.innerHTML = '';                                       // Clear the container
    const squareSize = 960 / size;                                  // Calculate the size of each square

    for (let i = 0; i < size * size; i++) {                         // Create the squares
        const square = document.createElement('div');               // Create a new div element
        square.classList.add('grid-Square');                        // Add the 'grid-square' class
        square.style.width = `${squareSize}px`;                     // Set the width and height of the square
        square.style.height = `${squareSize}px`;                             

        square.addEventListener('mouseenter', () => {               // Add an event listener to change the color of the square when the mouse enters
            square.style.backgroundColor = 'black';                 // Change the background color of the square to black
        }
        );

        container.appendChild(square);                              // Add the square to the container
    }
}
createGrid(16);                                                     // Create the 16x16 grid

resizeBtn.addEventListener('click', () => {                         // Add an event listener to the resize button
    let newSize = prompt('Enter new grid size (1-100):');           // Prompt the user to enter a new grid size

        if (newSize !== null) {                                     // Check if the user clicked 'Cancel'
            newSize = parseInt(newSize);                            // Convert the input to a number
    
            if (isNaN(newSize) || newSize < 1 || newSize > 100) {   // Check if the input is not a number or is not between 1 and 100
                alert('Please enter a number between 1 and 100');   // Alert the user to enter a valid number
            } else {
                createGrid(newSize);                                // Create a new grid with the specified size
            }
        }
    });