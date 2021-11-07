# Ejemplo 1 - Estrategias de productos y pruebas

## :dart: Objetivos

- Definir las diferencias entre un plan de testing y una estrategia de testing
- Analizar las partes que componen a un plan de testing

## Desarrollo

![img.png](img.png)

Cuando hablamos de desarrollo de software muy pocas veces nos detenemos a pensar en el negocio para el cual lo estamos
desarrollando. Vemos el área comercial como un área alejada, todo lo relacionado con el producto y ventas parece un
territorio desconocido que no nos molestamos en entender. Sin embargo ambos mundo están íntimamente ligados y de su
relación y entendimiento mutuo depende la supervivencia del negocio.

Desde una óptica más de ingeniera queremos utilizar las tecnologías de punta, aquellas en fase beta, aquellas que se
llevan los encabezados y que muchas veces no son más que buzzwords, palabras vacías sin sustancia.

Planteemos el siguiente escenario, imagina que te ofrecen trabajar en un proyecto que se describe de la siguiente forma:
somos una empresa de alta tecnología, utilizamos blockchain para potenciar nuestra IA, nuestro desarrollo está basado en
una arquitectura de micro-servicios, somos apasionados de la cultura dev-ops e impulsamos el shift left testing...

¿Tu lado más "manitas" se siente atraído por dicha descripción? ¿Sabemos realmente a que se dedica dicha empresa?

Pensemos ahora en el siguiente ejemplo:

Somos un portal de renta de DVD

¿Te parece atractiva dicha descripción? Por supuesto que no vamos a encontrar ninguna descripción tan plana en el mundo
de los negocios, en un ambiente acostumbrado a la parafernalia, solo podremos ver la sustancia una vez que logremos ver
más alla de los detalles. Y ver más allá de los detalles es la característica esencial de empresas innovadoras, que son
impulsadas por equipos innovadores. Entonces podemos entender como la elección de tecnologías y metodologías (los cómo)
debe venir después de los que, los equipos de éxito plantean primero la problematica a solucionar y solo entonces
dedican tiempo a elegir los detalles y no al reves, es decir, no elijo primero el cómo y después le encuentro un
problema a su medida. Revisemos el caso de ese portal de renta de DVD que 20 años despúes sigue presente entre nosotros
y cuyo nombre es Netflix.

Podemos ver que las empresas que innovan constantemente prosperan durante muchas décadas. Netflix es un ejemplo clásico.
Comenzó como un portal de alquiler de DVD en línea en la década de 1990. Se aventuró en la transmisión de películas,
dejando obsoleto su propio negocio de alquiler de DVD en la década de 2000. Más tarde comenzó a producir contenido
original llamado Netflix Originals. A partir de 2021, Netflix es la plataforma de suscripción de medios en línea más
grande con más de 200 millones de suscriptores.

El espacio tecnológico ha ido evolucionando en paralelo a estos negocios innovadores para adaptarse a sus necesidades
cada vez más avanzadas. Atrás quedaron los días en los que estábamos dispuestos a hacer cola para comprar entradas para
el cine, visitar una tienda en un lugar remoto para comprar un producto especial o llevar una lista de compras escrita a
mano en busca de detalles específicos. La tecnología facilita enormemente las tareas diarias. Podemos sentarnos en casa
y transmitir nuestros programas de entretenimiento favoritos con un solo toque, probar un vestido nuevo virtualmente,
programar nuestra lista de compras para que se entregue con regularidad y hacer aún más: ¡preparar un café con un
comando de voz!

Con una evolución tan rápida en la tecnología, la estrategia del producto debe ser versátil, atendiendo a las diferentes
necesidades de los clientes para sobrevivir a la competencia actual en sus respectivos sectores. Tiene que expandir sus
horizontes más allá de la simple creación de sitios web. Considere las empresas de transporte compartido, como Uber y
Lyft, que brindan sus servicios al alcance de la mano de varias maneras: las plataformas móviles web, Android e iOS. En
algunas regiones, incluso brindan servicios de reserva telefónica a través de sistemas interactivos de respuesta de
voz (IVR) y centros de llamadas. Este tipo de estrategia de producto versátil les ha ayudado a expandirse por todo el
mundo y superar a sus competidores.

Con una estrategia e innovación de productos tan versátil, las empresas tienen éxito en la adquisición de una masa
crítica de clientes. Pero ahora, el próximo desafío es prosperar más: obtener más ingresos y más clientes. Podemos ver a
los gigantes de la industria, como Amazon, aprovechando su base de clientes existente para realizar ventas cruzadas de
servicios y productos como una estrategia para expandirse más allá. Amazon, que comenzó como una librería en línea,
ahora realiza ventas cruzadas de varios productos que van desde artículos frescos de despensa hasta productos
electrónicos, productos minoristas y más, satisfaciendo la demanda de los clientes de bienes de consumo en casi todos
los segmentos del mercado.

La industria del software actual satisface todas estas necesidades comerciales: innovar nuevas ideas de productos,
darles vida y escalarlas para llegar a nuevos segmentos de clientes en todo el mundo. Para ayudar en el proceso,
aprenden continuamente nuevas tecnologías. Sin lugar a dudas, los equipos de desarrollo de software están al límite,
¡especialmente cuando la necesidad de la hora es entregar todo eso con alta calidad!

### La calidad de software es innegociable

La calidad del software es un criterio innegociable a la hora de sostener un negocio a largo plazo. Hay muchos ejemplos
de cómo una falla en la calidad del software puede afectar la reputación y resultar en grandes pérdidas para las
empresas. Por ejemplo, en octubre de 2014, en la venta del “Big Billion Day”, 1 los dos gigantes indios del comercio
electrónico, SnapDeal y Flipkart, se enfrentaron en su venta de temporada. El sitio web de Flipkart se bloqueó varias
veces durante el día debido a la abrumadora demanda, perdiendo sus ventas frente a Snapdeal.

Podemos ver muchos ejemplos de este tipo en todo el mundo, donde las empresas, a pesar de sus nuevas ideas de productos,
se deslizan por una pendiente pronunciada a medida que los clientes se mueven rápidamente hacia competidores más
confiables cuando la calidad se ve comprometida. Como resultado, podemos decir con firmeza que la calidad es esencial
para sostener un negocio a largo plazo.

Una calidad de software tan alta solo se puede cosechar mediante una combinación de desarrollo hábil y pruebas
meticulosas. En particular, cuando digo pruebas meticulosas, me refiero a prestar atención a todos los aspectos de la
aplicación a lo largo de su pila en varias facetas. Este capítulo presentará la amplitud de dichas pruebas de pila
completa, que deben realizarse para una aplicación web o móvil típica.

Revisemos el siguiente _template_ de un plan de pruebas, que contiene toda la información revisada en el pre-work

(Template de plan de
pruebas)[https://www.softwaretestinghelp.com/wp-content/qa/uploads/2007/07/sample-test-plan-template.pdf]
