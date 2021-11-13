# Ejemplo 2 - Inyección de dependencias

## :dart: Objetivos

- Identificar las características del principio de Inversión de control
- Aplicar el patrón de Inyección de dependencias

## ⚙ Requisitos

- WebStorm
- Node.js
- Jest
- sqlite3

## Desarrollo

El patrón de inyección de dependencias consiste en hacer que nuestras piezas de software sean independientes
comunicándose únicamente a través de un interface. Esto implica muchas modificaciones en el código fuente como el uso de
implementaciones, la eliminación de la instanciación de objetos mediante la instrucción new o la necesidad de un modo de
configuración que indique que clases se instanciarán en el caso de solicitarlo.

### Mejora tus test de aplicaciones

La no utilización de la instrucción new, tiene una gran ventaja para el testeo automático de aplicaciones que consiste
en hacer mocking. Esta técnica consiste en simular piezas de software dependientes y reemplazarlas por otras más simples
y más rápidas para ejecutar multitud de test.

Por ejemplo, si un test de unidad tuviese una dependencia a un código para que conecte a la base de datos ese test se
puede llegar a ejecutar tremendamente lento. Si tenemos una base de datos con mucho volumen o tenemos muchos test a
ejecutar, puede que llegue a ser inviable realizar test de unidad. Como la inyección de dependencias nos permite
modificar estos componentes, podemos simular algo más eficiente.

## Perdida de la orientación de la arquitectura en tiempo de diseño

Una gran ventaja de ciertos IDEs en la actualidad es de poder acceder rápidamente al código fuente de las clases y en
modificar el código mientras estás depurando. Al usar inyección de dependencias se pierden estas características.

Por una parte, al trabajar con interfaces y no con la clase directamente, no puedes saber en tiempo de diseño que estás
ejecutando así que se pierde la visión de todo el código fuente para encontrar el error.

Es muy importante ser muy ordenado con los nombres y las carpetas donde dejas las clases para conocer que es lo que se
está ejecutando y encontrarlo navegando por los directorios. Sin inyección de dependencias, poniendo directamente la
clase en el código y pulsando una tecla de ir al código fuente se abre una pestaña nueva con ese fichero para editarlo.
Algo muy sencillo, pero que ahorra muchísimo tiempo.

## Estado actual de nuestro software

En este momento si quisiéramos probar el correcto funcionamiento de nuestros endpoints, tendríamos que crear una base de
datos solo para pruebas, sin embargo al no tener control sobre la base de datos o la conexión, tendríamos que añadir
código que verificara si estamos ejecutando nuestra app en modo productivo o de pruebas. Lo cual no es una buena
práctica.

Por lo anterior desacoplaremos la logica contenida en nuestro router (`app.js`) y tomaremos ventaja d ela inyección de
dependencias para controlar el acceso a la base de datos 
