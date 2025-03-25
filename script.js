//your JS code here. If required.
// Function to simulate delay using async/await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Function to handle form submission
async function handleSubmit() {
  const text = document.getElementById("text").value;
  const delayTime = parseInt(document.getElementById("delay").value);
  const output = document.getElementById("output");

  // Clear previous output
  output.textContent = "";

  // Input validation
  if (!text) {
    output.textContent = "Please enter a message.";
    return;
  }
  if (!delayTime || delayTime <= 0) {
    output.textContent = "Please enter a valid delay.";
    return;
  }

  // Introduce delay using async/await
  await delay(delayTime);

  // Display the message after the delay
  output.textContent = text;
}

// Attach event listener to the button
document.getElementById("btn").addEventListener("click", handleSubmit);
