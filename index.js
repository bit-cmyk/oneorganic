// Function to display appropriate menu based on time of day
function displayMenu() {
    var currentTime = new Date().getHours();
    console.log(currentTime)

    // If morning, display morning menu, else display evening menu
    if (currentTime < 12) {
        document.getElementById("morningMenu").style.display = "block";
        document.getElementById("eveningMenu").style.display = "none";
    } else {
        document.getElementById("morningMenu").style.display = "none";
        document.getElementById("eveningMenu").style.display = "block";
    }
}

// Call the function to display appropriate menu when the page loads
displayMenu();