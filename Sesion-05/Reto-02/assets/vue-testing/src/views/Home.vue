<template>
  <div class="home">
    <input v-model="number" data-test-id="number-to-calculate-fibonacci">
    <p>El resultado es: <span data-test-id="result">{{ result }}</span></p>
    <button data-test-id="calculate-button" @click="calculateFibonacci">Calcular</button>
  </div>
</template>

<script>

import { fibonacci } from './Fibonacci';

export default {
  name: 'Home',
  data() {
    return {
      number: 0,
      result: null,
    };
  },
  methods: {
    calculateFibonacci() {
      this.result = fibonacci(this.number);
    },
  },
};
</script>
