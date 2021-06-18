//Setting texts invisible 
document.querySelector('#whoMore').style.display = "none";
document.querySelector('#hobbiesMore').style.display = "none";
document.querySelector('#backMore').style.display = "none";


// Function to reveal/hide hidden texts
// Takes a single parameter which is the id of the text to reveal/hide
function showHiddenText(textID) {
    let hidden = document.querySelector(textID);

    //Using a conditional if statement to toggle the text
    if (hidden.style.display == 'block') {
        hidden.style.display = 'none';
    } else {
        hidden.style.display = 'block';
    }
}


// Creating 3 different variables for each button
let wBtn = document.querySelector('#whoMoreButton');
let hBtn = document.querySelector('#hobbiesMoreButton');
let bBtn = document.querySelector('#backMoreButton');

// Adding mouse click event listener for each button to call the showHiddenText function above

wBtn.addEventListener('click', function () {
    showHiddenText('#whoMore')
});
hBtn.addEventListener('click', function () {
    showHiddenText('#hobbiesMore')
});
bBtn.addEventListener('click', function () {
    showHiddenText('#backMore')
});


let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
let p3 = document.querySelector('#p3');

// Function to reset the background of the provided html element to transparent/
function resetBackground(p) {
    p.style.backgroundColor = 'transparent';
}


// Function to change the beckground color of the text (P1)
function changeBoxP1() {
    p1.style.backgroundColor = 'lightyellow';
}

// Adding event listener to call the changeBoxP1 function when the mouse cursor is over the element
p1.addEventListener('mouseover', changeBoxP1);
// When the mouse cursor is out of the object call resetBackground function.
p1.addEventListener('mouseout', function () {
    resetBackground(p1);
});

// Function to change the beckground color of the text (P2)
function changeBoxP2() {
    p2.style.backgroundColor = '#fae1dd ';
}

// Adding event listener to call the changeBoxP1 function when the mouse cursor is over the element
p2.addEventListener('mouseover', changeBoxP2);
// When the mouse cursor is out of the object call resetBackground function.
p2.addEventListener('mouseout', function () {
    resetBackground(p2);
});

// Function to change the beckground color of the text (P3)
function changeBoxP3() {
    p3.style.backgroundColor = 'lightyellow';
}

// Adding event listener to call the changeBoxP1 function when the mouse cursor is over the element
p3.addEventListener('mouseover', changeBoxP3);
// When the mouse cursor is out of the object call resetBackground function.
p3.addEventListener('mouseout', function () {
    resetBackground(p3);
});

// Assign html object to a variable
var pic = document.getElementById("pic");

// Function to change the src attribute of the above element
// takes a single parameter which is the name of the image
function changeImage(imgName) {
    // Use string concatenation to build a proper image path
    pic.src = "./images/" + imgName + ".jpg";
}

// adding an event listener to the image to change the image once the mouse cursor is over the image
pic.addEventListener('mouseover', function () {
    changeImage("yellow")
});
// adding an event listener to the image to change the image once the mouse cursor is not over the image anymore
pic.addEventListener('mouseout', function () {
    changeImage("purple")
});

var imgSecond = document.getElementById('img-second');
imgSecond.addEventListener('mouseover', function () {
    imgSecond.style.opacity = 1
})
imgSecond.addEventListener('mouseout', function () {
    imgSecond.style.opacity = 0.7
})
