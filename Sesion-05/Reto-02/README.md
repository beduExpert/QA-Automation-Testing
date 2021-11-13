# Reto 2 - Fibonacci UI

## :dart: Objetivos

- Aplicar pruebas funcionales sobre la interfaz de usuario con Vue Test Utils

## ⚙ Requisitos

- WebStorm
- Node.js
- Jest
- Vue.js

## Desarrollo

Crea un formulario básico que permita al usuario ingresar un número que represente el n-esimo valor de la sucesión de
fibonacci y debemos imprimir el valor de fibonacci en esa posición.

Debemos incluir pruebas que validen el correcto funcionamiento de nuestra página.

1. En el archivo `Home.vue` crea un formulario con un `input` (el valor de `n` para calcular fibonacci) y un `button`
2. El `button` debera tener un evento listener que llame a una función para calcular el valor de fibonacci
3. La función que es llamada desde el listener tiene que usar la función `fibonacci` dle archivo `Fibonacci`
4. En el archivo `fibonacci.spec.js` agregar las pruebas necesarias que nos permitan probar el flujo completo de la aplicación 

<details>
  <summary>Solución</summary>

1. Creamos un formulario con un `input` (el valor de `n` para calcular fibonacci) y un `button` que tiene un listener del evento click que llama a la función para calcular el valor de fibonacci

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

1. Creamos una prueba que monta nuestro componente, manda un valor a nuestro `input` y compara el valor obtenido contra el esperado

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

