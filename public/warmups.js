/* Replace the TODO in the next line with your userid */
import checkAnswer from "https://rschraml.net/debugme.js?userid=TODO";

import DATA from "./data.js";

/* Call this function from the console and use the debugger to find the secret code. */
const debugExercise = () => {
  checkAnswer("TODO:secret");
  /* Strategy: TODO */
};
window.debugExercise = debugExercise;

/* Return an array of the userId of the first N students in the data. */
const firstNStudents = (n) => {
  //TODO
};

/* Return an Object mapping department names to codes of all departments */
const shortDeptCodes = () => {
  //TODO
};

/* Return the average number of ects completed by the students in the data */
const averageects = () => {
  //TODO
};

/* Test the warmup functions */
const testWarmups = () => {
  debugExercise();

  /* These checks work by converting the return value into a string for comparison. We will talk more about JSON later in the course. */
  console.assert(JSON.stringify(firstNStudents(3)) === `["rschraml","lspitz","inussbaum"]`,
    "firstNStudents() returned incorrect answer");
  console.assert(JSON.stringify(shortDeptCodes()) === `{"Artificial Inteligence and Human Interfaces":"AIHI","Geoinformatics":"GI","Computer Science":"CS","Mathematics":"M"}`,
    "shortDeptCodes() returned incorrect answer");
  console.assert(averageects().toFixed(3) === "159.091", "averageects() returned incorrect answer");

  console.log("Tests completed");
};
window.testWarmups = testWarmups;
