# 🌍 Geo Bites

Geo Bites is a fun geography quiz game that challenges users to identify the capital city of a country based on its flag.

The application randomly displays a country's flag and provides four possible capital cities. Players select an answer and receive immediate feedback before moving on to the next question.

---

## 📸 Features

* 🏳️ Display a random country flag
* ❓ Multiple-choice capital city quiz
* ✅ Highlight selected answer
* 🎉 Immediate feedback after submitting
* 🔄 Automatically load the next question
* 📁 Uses local JSON data
* 📱 Responsive design

---

## 🛠 Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Fetch API
* JSON

---

## 📂 Project Structure

```text
.
├── index.html
├── assets
│   ├── css
│   │   └── style.css
│   ├── js
│   │   └── script.js
│   └── images
│       └── flag.png
├── data
│   └── countries.json
└── README.md
```

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/rrana5106/geeks-unleashed.git
```

### Navigate into the Project

```bash
cd geo-bites
```

### Run the Project

Open the project using VS Code Live Server or any local development server.

Example:

```text
http://127.0.0.1:5500
```

---

## 🎮 How to Play

1. A country's flag is displayed.
2. Four capital city options are presented.
3. Select your answer.
4. Click **Submit Answer**.
5. Receive feedback:

   * ✅ Correct answer
   * ❌ Incorrect answer with the correct capital displayed
6. A new question loads automatically after two seconds.

---

## 🧠 Game Logic

* Country data is loaded from `countries.json`.
* Countries without capitals are ignored.
* One country is randomly selected.
* The correct capital is added to the options.
* Three random capitals are added as incorrect answers.
* Answer choices are shuffled before display.

---

## 🔒 Security

To avoid exposing API keys in the frontend, country data is stored locally in `countries.json`.

This makes the application:

* Faster
* More secure
* Easier to deploy
* Independent of third-party API limits

---

## 📋 Future Improvements

* [ ] Score counter
* [ ] Difficulty levels
* [ ] Timer countdown
* [ ] High score leaderboard
* [ ] Dark mode
* [ ] Sound effects
* [ ] Progress indicator
* [ ] Multiple rounds
* [ ] Restart button
* [ ] Support for all countries

---

## 🤝 Team Workflow

### Create a Branch

```bash
git checkout -b feature-name
```

### Commit Changes

```bash
git add .
git commit -m "Add feature"
```

### Push Branch

```bash
git push origin feature-name
```

### Create a Pull Request

Review the changes and merge into the `main` branch.

---

## 📚 Learning Objectives

This project was created to practice:

* Fetch API
* DOM Manipulation
* Event Listeners
* Arrays and Objects
* Randomization
* Conditional Logic
* Error Handling
* Responsive Web Design
* Git and GitHub Collaboration

---

## 👨‍💻 Authors

Built collaboratively as a team project.

- geek-unleashed
    - JudithKnight123 (https://github.com/JudithKnight123)
    - MelodySpring (https://github.com/MelodySpring)
    - rrana5106 (https://github.com/rrana5106)

---

### Happy Coding! 🚀
