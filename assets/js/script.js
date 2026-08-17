// HTML elements
const fishImg = document.querySelector(".fishImg");
const answerButtons = document.querySelectorAll(".option");
const submitBtn = document.querySelector("#submit");
const answerBox = document.querySelector("#answerBox");
const answerText = document.querySelector("#answerBox p");

// Hide answer box initially
answerBox.style.display = "none";

// Data storage
let fishList = [];
let currentFish;
let selectedAnswer = "";

// Load fish data from FishWatch API
async function loadFishData() {
  try {
    const response = await fetch("https://www.fishwatch.gov/api/species");
    const data = await response.json();

    // Filter fish with images + names
    fishList = data
      .filter(fish => fish["Species Name"] && fish["Image Gallery"])
      .map(fish => ({
        name: fish["Species Name"],
        image: fish["Image Gallery"][0]?.src || "",
      }));

    showQuestion();
  } catch (error) {
    console.error("Error loading fish data:", error);
  }
}

// Show a quiz question
function showQuestion() {
  answerBox.style.display = "none";
  selectedAnswer = "";

  // Reset button styles
  answerButtons.forEach(btn => btn.classList.remove("selected"));

  // Pick a random fish
  const randomIndex = Math.floor(Math.random() * fishList.length);
  currentFish = fishList[randomIndex];

  // Display fish image
  fishImg.src = currentFish.image;
  fishImg.alt = currentFish.name;

  // Build answer options
  let options = [currentFish.name];

  while (options.length < 4) {
    const randomFish = fishList[Math.floor(Math.random() * fishList.length)].name;
    if (!options.includes(randomFish)) {
      options.push(randomFish);
    }
  }

  // Shuffle answers
  options.sort(() => Math.random() - 0.5);

  // Put answers on buttons
  answerButtons.forEach((btn, i) => {
    btn.textContent = options[i];
  });
}

// User selects answer
answerButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectedAnswer = button.textContent;

    answerButtons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});

// Submit answer
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  answerBox.style.display = "flex";

  if (!selectedAnswer) {
    answerText.textContent = "Please select an answer.";
    return;
  }

  if (selectedAnswer === currentFish.name) {
    answerText.textContent = "Correct! 🎉";
  } else {
    answerText.textContent = `Incorrect. The correct answer is ${currentFish.name}.`;
  }

  setTimeout(showQuestion, 2000);
});

// Start quiz
loadFishData();
