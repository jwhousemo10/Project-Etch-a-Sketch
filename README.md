# Project-Etch-a-Sketch
A browser version of a sketchpad/Etch-A-Sketch variant.

Assignment

Create a webpage with a 16x16 grid of square divs.
-Create the divs using JavaScript.
-Put the grid squares inside a “container” div. This div can be written in your HTML file.
-Use Flexbox to make the divs appear as a grid (versus just one on each line).

Set up a “hover” effect so that the grid divs change color when the mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
-Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
-There are multiple ways to change the color of the divs, including:
    Adding a new class to the div.
    Changing the div’s background color using JavaScript.

Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.
-Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
-Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
-Check out prompts.
-You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.