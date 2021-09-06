# Reto 1 - Implementar conversión de PascalCase a snake_case

## Desarrollo

![style-cases.png](assets/style-cases.png)

Queremos realizar un programa que sea capaz de convertir una cadena en formato PascalCase (EstoEsUnEjemplo) a formato
snake_case(esto_es_un_ejemplo). Para ello contaremos con la siguiente función:

`castPascalCaseToSnakeCase(pascalCaseString: string) → string`


<details>
  <summary>Solución</summary>

`StringOperations.js`
```javascript

const castPascalCaseToSnakeCase = (pascalCaseString) => {
    return pascalCaseString.split(/(?=[A-Z])/).join('_').toLowerCase();
}

```
</details>

