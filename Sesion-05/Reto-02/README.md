# Reto 2 - Fibonacci UI

## Desarrollo

Crea un formulario básico que permita al usuario ingresar un número que represente el n-esimo valor de la sucesión de
fibonacci y debemos imprimir el valor de fibonacci en esa posición.

Debemos incluir pruebas que validen el correcto funcionamiento de nuestra página.


<details>
  <summary>Solución</summary>

`Home.vue`

```javascript

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


```

`fibonacci.spec.js`
```javascript

import {mount} from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Fibonacci', () => {

    const build = () => {
        const wrapper = mount(Home, {});

        return {
            wrapper,
            numberToCalculateFibonacci: () => wrapper.find('[data-test-id="number-to-calculate-fibonacci"]'),
            calculateButton: () => wrapper.find('[data-test-id="calculate-button"]'),
            result: () => wrapper.find('[data-test-id="result"]'),

        };
    };

    it('renders fibonacci result for user input when user click calculateButton', async () => {
        const number = 6;
        const expectedResult = '8';
        const {numberToCalculateFibonacci, calculateButton, result} = build();

        await numberToCalculateFibonacci().setValue(number);
        await calculateButton().trigger('click');

        expect(result().text()).toMatch(expectedResult);
    });
});


```
</details>

