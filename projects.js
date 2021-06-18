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
