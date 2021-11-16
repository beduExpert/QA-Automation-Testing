# Ejemplo 2 - Desarrollo Guiado por Pruebas de Aceptación

## :dart: Objetivos

- Reconocer las diferentes metodologías de pruebas ágiles
- Analizar la metodología ATDD

## Desarrollo

![imagen](https://user-images.githubusercontent.com/5317347/140622845-15f119af-c19d-4ff2-b827-65ab065896cf.png)


El desarrollo impulsado por pruebas de aceptación (ATDD) es otra mejora del desarrollo impulsado por pruebas que
promueve la colaboración entre usuarios comerciales, evaluadores y desarrolladores para definir criterios de aceptación
automatizados antes de que comience la codificación. ATDD y TDD son técnicas complementarias: ATDD ayuda a describir los
objetivos comerciales de alto nivel, mientras que TDD ayuda a los desarrolladores a implementarlos como requisitos. ATDD
ayuda a garantizar que todos los miembros del proyecto comprendan lo que se está implementando, ya que las pruebas de
ATDD que fallan proporcionan una respuesta rápida de que no se están cumpliendo los requisitos.

Aunque no es necesario que estén escritas en el lenguaje Gherkin que se usa en los proyectos BDD, las historias de
usuario en los proyectos ATDD deben estar bien definidas. Una mejor práctica para hacer esto en una reunión de "Tres
amigos" es seguir la fórmula de las "3 C", ideada por Ron Jeffries, que captura los componentes de una historia de
usuario:

- Tarjeta: las historias se escriben tradicionalmente en tarjetas de notas, y estas tarjetas se pueden anotar con
  detalles adicionales
- Conversación: los detalles detrás de la historia surgen a través de conversaciones con el propietario del producto.
- Confirmación: las pruebas de aceptación confirman que la historia está terminada y funcionando según lo previsto

Una parte clave de las pruebas ATDD es que se ejecutan automáticamente cada vez que se realiza un cambio en el código
fuente. Además de probar la aplicación, las pruebas de aceptación automatizadas son útiles para medir el progreso de su
equipo de proyecto, ya que, en un proyecto ágil, **el software productivo se considera la única medida objetiva del
progreso**.
