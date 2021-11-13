# Ejemplo 2 - Vue Testing

## :dart: Objetivos

- Crear pruebas unitarias y de integración con jest

## ⚙ Requisitos

- WebStorm
- Node.js
- Jest
- Vue.js

## Desarrollo

En la actualidad los 3 frameworks que dominan el desarrollo frontend son React, Vue.js y Angular. Los 3 comparten
características similares en su filosofía de desarrollo y por lo tanto de testing. En este ejemplo utilizaremos Vue.js
peor los principios utilizados aplican para cualquiera de los otros dos frameworks.

Aprovechando el código generado por vue-cli veamos un ejemplo de una prueba básica para verificar que el valor dinamico
de una propiedad se renderiza de forma adecuada.

`HelloWorld.vue`

```javascript

<template>
    <div class="hello">
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
    export default {
    name: 'HelloWorld',
    props: {
    msg: String,
},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>


```

`example.spec.js`

```javascript

import {shallowMount} from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message';
        const wrapper = shallowMount(HelloWorld, {
            propsData: {msg},
        });
        expect(wrapper.text()).toMatch(msg);
    });
});

```

Como puedes ver seguimos utilizando jest como nuestro test runner, si prefiriéramos cualquier otro podríamos utilizarlo
sin problema.

La particularidad de este test radica en la utilización de la
librería [vue test utils](https://vue-test-utils.vuejs.org/) que es un conjunto de herramientas que nos permite
interactuar con nuestros componentes de Vue y realizar acciones como: montar componentes, seleccionar elementos,
ejecutar acciones (clics, etc) sobre elementos, etc. Por lo tanto para realizar pruebas en cualquier otro framework
tendríamos que utilizar su compilado de herramientas particular. 
