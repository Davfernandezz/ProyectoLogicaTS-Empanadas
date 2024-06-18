# Compra de empanadas🥟

## Tabla de contenido

- [Enunciado](#enunciado-del-problema)
- [Entrada](#entrada)
- [Salida](#salida)
- [Explicacion](#explicacion-del-proceso)
- [Stack](#stack)
- [Autor](#autor)

## Enunciado del problema🧾

El profesor Maple se embarca en la tarea de adquirir empanadas para todos los participantes del bootcamp de programación. Dado que hoy es el Día de las Empanadas,  hay una oferta especial en la que te llevas hasta tres empanadas y solo pagas la más cara. Con un presupuesto ajustado para el curso, los profesores debaten para intentar minimizar el gasto total por todas las empanadas.

Entonces, el profesor Maple decide seguir la siguiente estrategia: como la empanada más cara la tendrá que pagar de todas formas, la comprará junto a la segunda y tercera más caras, que ofrecen el mayor ahorro. Con las n-3 empanadas restantes, aplicará el mismo procedimiento hasta que no quede ninguna.

Los profesores reflexionan y llegan a la conclusión de que esta es la mejor estrategia. Pero cuando están a punto de pagar, escuchan la siguiente conversación de una familia de al lado:

"Queremos una empanada de pollo, de 12 euros, una de carne, de 14 euros, y una vegetariana, de 16 euros."

Los profesores piensan inmediatamente: "Cogerán la oferta 3x1, de forma que solo paguen los 16 euros de la empanada vegetariana y se lleven gratis la de carne y la de pollo". A lo cual, la familia continúa:

"Pero pónganosla de la siguiente forma: Dos empanadas mitad pollo y mitad vegetariana, y la de carne aparte. Como todas las empanadas valen 14 euros, cogeremos la oferta 3x1 y nos las llevaremos por 14 euros".

Cuando los profesores salen de su asombro, deciden que lo más sensato es utilizar el hecho de que las empanadas se pueden pedir mitad de un tipo y mitad de otro, pagando por ella la media del costo de las dos empanadas enteras. Así, una empanada mitad pollo y mitad vegetariana valdrá (12 + 16)/2 = 14 euros. Sin embargo, no logran decidir cuál es la mejor forma de repartir las empanadas en mitades primero, y en grupos después, para minimizar el precio.

Ayúdales haciendo una función que lo calcule lo más rápido posible: hay decenas de estudiantes hambrientos que dependen de ti.

Las empanadas que han elegido los profesores tienen 3, 4 o 5 ingredientes. La masa de una empanada vale 6 euros, y cada ingrediente adicional vale 2 euros. Así, las empanadas pueden valer 12, 14 o 16 euros. Se garantiza que el número total de empanadas será múltiplo de 3.

## Entrada

La función debe tener tres parámetros de entrada. Cada conjunto de entrada consta de tres enteros, a b c, que son el número de empanadas de 3, 4 y 5 ingredientes, respectivamente. Se garantiza que el número de empanadas, a + b + c, cumple que a + b + c < 40. Además, el número de empanadas es divisible entre 3.

## Salida

Por cada conjunto de entrada, retornar un único entero: la mínima cantidad de euros que se puede pagar para llevarse todas las empanadas.

## Explicacion del proceso

1.Condiciones de los parametros de entrada:

Añadiremos tres condiciones para confirmar que los numeros de entrada van ser numeros enteros, si el total de los numeros es multiplo de tres 3 y si es igual o mayor a 40. En caso de que no se cumplan estos requisitos nos lanzara un error.

2.Creación del array "preciosEmpanadas":

Crearemos el array "preciosEmpanadas" y le añadiremos tres bucles for en el que ascociaremos los tres tipos de precios posibles.
En el primer bucle agregaremos 12 al array "preciosEmpanadas" a veces, en el segundo bucle agregaremos 14 al array "preciosEmpanadas" b veces y en el tercer bucle agregaremos 16 al array "preciosEmpanadas" c veces.

3.Creación del array "mediaEmpanadas"

Crearemos el array "mediaEmpanadas" para hacer la media de los precios, se usa un bucle while hasta que queden menos de dos elementos en el array. Se puede obtener el primer elemento con el "shift" y el último con el "pop". El nuevo precio se calculara con la media de los 2 elementos y se agregara al array 2 veces. Si queda un elemento sin combinar, se agrega directamente al array .

4.Ordenar la media de los precios:

Usaremos "sort" para ordenar el array "mediaEmpanadas" de de mayor a menor.


5.Calcular el precio total:

Para calcular el precio total utilizaremos un bucle for para recorrer el array "mediaEmpanadas" y cada tercer elemento se agregara a "precioTotal".

## Instrucciones de uso

1. Ejecutar los test:
    ```bash
    npm run test
    ```


## Stack

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) 


## Autor

- **David Fernandez Valle**
  - [GitHub](https://github.com/Davfernandezz)
