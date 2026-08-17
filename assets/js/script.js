// HTML elements
const birdImg = document.querySelector(".birdImg");
const answerButtons = document.querySelectorAll(".option");
const submitBtn = document.querySelector("#submit");
const answerBox = document.querySelector("#answerBox");
const answerText = document.querySelector("#answerBox p");

// Hide answer box initially
answerBox.style.display = "none";

// Data storage
let birdList = [];
let currentBird;
let selectedAnswer = "";

// Load bird data from free API
async function loadBirdData() {
  try {
    const response = await fetch("https://ornithophile.vercel.app/api/birds/alpha/a");
    const data = await response.json();

    // Only keep birds that actually have images
    birdList = data.filter(bird =>
      bird.male_image || bird.female_image
    );

    if (birdList.length === 0) {
      answerBox.style.display = "flex";
      answerText.textContent = "No birds with images found.";
      return;
    }

    showQuestion();
  } catch (error) {
    console.error("Error loading bird data:", error);
    answerBox.style.display = "flex";
    answerText.textContent = "Error loading bird data.";
  }
}

// Show a quiz question
function showQuestion() {
  answerBox.style.display = "none";
  selectedAnswer = "";

  // Reset button styles
  answerButtons.forEach(btn => btn.classList.remove("selected"));

  // Pick a random bird
  const randomIndex = Math.floor(Math.random() * birdList.length);
  currentBird = birdList[randomIndex];

  // Choose whichever image exists
  const imageUrl = currentBird.male_image || currentBird.female_image;

  birdImg.src = imageUrl;
  birdImg.alt = currentBird.common_name;

  // Build answer options
  let options = [currentBird.common_name];

  while (options.length < 4) {
    const randomBird = birdList[Math.floor(Math.random() * birdList.length)].common_name;
    if (!options.includes(randomBird)) {
      options.push(randomBird);
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

  if (selectedAnswer === currentBird.common_name) {
    answerText.textContent = "Correct! 🎉";
  } else {
    answerText.textContent = `Incorrect. The correct answer is ${currentBird.common_name}.`;
  }

  setTimeout(showQuestion, 2000);
});

// Start quiz
loadBirdData();
