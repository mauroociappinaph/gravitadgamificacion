export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  reward: number;
}

export const cosmicQuiz: QuizQuestion[] = [
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Jupiter",
    reward: 1,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    correctAnswer: "Mars",
    reward: 1,
  },
  {
    question: "What is the name of the galaxy that contains our Solar System?",
    options: ["Andromeda", "Triangulum", "Whirlpool", "Milky Way"],
    correctAnswer: "Milky Way",
    reward: 1,
  },
  {
    question: "How many moons does Earth have?",
    options: ["One", "Two", "None", "Three"],
    correctAnswer: "One",
    reward: 1,
  },
  {
    question:
      "What force is responsible for holding the planets in orbit around the Sun?",
    options: ["Magnetism", "Gravity", "Friction", "Nuclear Force"],
    correctAnswer: "Gravity",
    reward: 1,
  },
  {
    question: "Which planet has the most prominent ring system?",
    options: ["Uranus", "Jupiter", "Saturn", "Neptune"],
    correctAnswer: "Saturn",
    reward: 1,
  },
  {
    question: "What is a light-year?",
    options: [
      "A unit of time",
      "A unit of speed",
      "A unit of distance",
      "A unit of light intensity",
    ],
    correctAnswer: "A unit of distance",
    reward: 1,
  },
  {
    question: "Who was the first human to walk on the Moon?",
    options: [
      "Buzz Aldrin",
      "Yuri Gagarin",
      "Michael Collins",
      "Neil Armstrong",
    ],
    correctAnswer: "Neil Armstrong",
    reward: 1,
  },
  {
    question: "What is the name of the star at the center of our solar system?",
    options: ["Proxima Centauri", "Sirius", "The Sun", "Betelgeuse"],
    correctAnswer: "The Sun",
    reward: 1,
  },
  {
    question:
      "A black hole is an object with a gravitational field so strong that nothing, not even ______, can escape.",
    options: ["Sound", "Light", "Matter", "Time"],
    correctAnswer: "Light",
    reward: 1,
  },
];
