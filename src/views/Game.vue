<template>
    <div class="math-game bg-white min-h-screen flex items-center justify-center">
      <div class=" p-8 bg-orange-50 rounded-lg shadow-md">
        <h1 class="text-3xl text-orange-950 font-bold mb-4">Math Game</h1>
        <div v-if="!gameOver">
          <p class="mb-4 text-orange-950">{{ currentProblem.question }}</p>
          <div class="flex items-center justify-center">
            <input v-model="userAnswer" type="number" class="p-2 border border-gray-300 rounded mr-2" />
            <button @click="checkAnswer" class="bg-orange-700 text-white px-4 py-2 rounded">Submit</button>
          </div>
          <p v-if="feedback !== null" :class="{ 'text-green-500': feedback, 'text-red-500': !feedback }" class="mt-2">
            {{ feedback ? 'Correct!' : 'Incorrect. Try again.' }}
          </p>
        </div>
        <div v-else>
          <h2 class="text-2xl font-bold mb-4">Game Over!</h2>
          <p>Your Score: {{ score }}</p>
          <button @click="resetGame" class="bg-green-500 text-white px-4 py-2 rounded mt-4">Play Again</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  
  const generateProblem = () => {
    const num1 = generateRandomNumber(1, 10);
    const num2 = generateRandomNumber(1, 10);
    const operator = ['+', '-', '*'][generateRandomNumber(0, 2)];
    const answer = eval(`${num1} ${operator} ${num2}`);
    return {
      question: `${num1} ${operator} ${num2} = ?`,
      answer,
    };
  };
  
  let currentProblem = ref(generateProblem());
  let userAnswer = ref(null);
  let feedback = ref(null);
  let score = ref(0);
  let gameOver = ref(false);
  
  const checkAnswer = () => {
    if (parseInt(userAnswer.value) === currentProblem.value.answer) {
      feedback.value = true;
      score.value++;
    } else {
      feedback.value = false;
    }
  
    setTimeout(() => {
      feedback.value = null;
      userAnswer.value = null;
      currentProblem.value = generateProblem();
  
      if (score.value === 5) {
        gameOver.value = true;
      }
    }, 1000);
  };
  
  const resetGame = () => {
    score.value = 0;
    gameOver.value = false;
    currentProblem.value = generateProblem();
  };
  </script>
  
  <style scoped>
  .math-game {
  text-align: center;
}

button {
  cursor: pointer;
}
  </style>
  