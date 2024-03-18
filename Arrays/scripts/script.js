// Initial array of things
var animal = { name: "Rolley", colour: "brown", age: 12 }; // object
var arrayOfThings = ["Paul", animal, 22];

// Function to update the name property of the animal object
function updateName(newName) {
    arrayOfThings[1].name = newName; // Update the name property
}

// Function to display the values of arrayOfThings in the console
function displayValues() {
    console.log("Original values:", arrayOfThings);
}

// Function to display the updated values of arrayOfThings in the console
function displayUpdatedValues() {
    console.log("Updated values:", arrayOfThings);
}

// Event listener for the update button
document.getElementById("updateButton").addEventListener("click", function() {
    // Call the updateName function with a new name
    updateName("UpdatedName");

    // Display the updated values in the console
    displayUpdatedValues();
});

// Display the original values in the console
displayValues();