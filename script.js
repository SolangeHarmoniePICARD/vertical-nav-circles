// Get the container element
var circleBar = document.getElementById("circle-bar");

// Get all buttons with class="btn" inside the container
var dots = circleBar.getElementsByClassName("dot");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}
