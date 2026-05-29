# Genshin Memory Card Game

A React-based memory card game built using the Genshin Impact API.
The goal of the game is to click unique character cards without repeating the same card twice.

## Features

* Dynamic character cards fetched from the Genshin API
* Randomized card order after every click
* Score tracking system
* High score tracking
* Responsive card layout
* Built with React Hooks (`useState`, `useEffect`)
* Beginner-friendly project structure

---

# Technologies Used

* React
* JavaScript (ES6)
* CSS3
* Vite
* Genshin API

---

# API Used

Genshin Impact API:

https://genshin.jmp.blue/

`Credits: Marvin Witt`
---

# Project Objective

The purpose of this project is to practice and understand:

* React component structure
* State management
* React hooks
* API fetching
* Event handling
* Conditional rendering
* Array methods like `map()`, `sort()`, and `slice()`

---

# Game Rules

1. Click a character card.
2. Every unique click increases the score.
3. Cards shuffle after every click.
4. Clicking the same card twice resets the score.
5. High score is preserved during gameplay.

---

# Folder Structure

```txt
src/
│
├── components/
│   ├── Card.jsx
│   ├── Scoreboard.jsx
│
├── styles/
│   ├── App.css
│
├── App.jsx
├── main.jsx
```

---

# Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into the project folder:

```bash
cd memory-card-game
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

# Future Improvements

* Add animations
* Add difficulty levels
* Add timer system
* Add sound effects
* Add win/lose screen
* Store high score using LocalStorage
* Add mobile optimization

---

# Author

Hari Prasad

---

# License

This project is created for educational and learning purposes.
