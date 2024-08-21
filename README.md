# Calculadora JavaScript

Una calculadora básica desarrollada en JavaScript.

## Índice

- [Descripción](#descripción)
- [Estructura del Código](#estructura-del-código)
  - [Archivo HTML](#archivo-html)
  - [Archivo JavaScript](#archivo-javascript)
- [Funcionamiento de la Calculadora](#funcionamiento-de-la-calculadora)
- [Créditos](#créditos)

## Descripción

Este proyecto es una calculadora básica desarrollada en JavaScript usando un array para sustituir el metodo eval(). Consta de un archivo HTML que define la estructura y apariencia de la calculadora, y un archivo JavaScript que contiene la lógica de funcionamiento.

## Estructura del Código

### Archivo HTML

El archivo HTML `index.html` define la estructura y el diseño de la calculadora. Aquí se encuentra:

1. **Encabezado y Meta Etiquetas**: Establece el título de la página y la codificación de caracteres.
2. **Enlace a Hoja de Estilo CSS**: Vincula el archivo CSS `styles.css` que contiene los estilos de la calculadora.
3. **Estructura de la Calculadora**: Contiene un elemento `main` que envuelve todo el contenido de la calculadora formado por elementos `input`.
4. **Pie de Página**: Un elemento `footer` que contiene un párrafo con el nombre del autor.
5. **Inclusión del Archivo JavaScript**: Al final del archivo HTML, se incluye el archivo JavaScript `main.js` con la palabra clave `defer`.

### Archivo JavaScript

El archivo JavaScript `main.js` contiene la lógica de funcionamiento de la calculadora. Aquí se encuentran las siguientes secciones:

1. **Declaración de Variables Globales**:
   - `numeros`: Un arreglo que almacena los números ingresados.
   - `operador`: Una variable que almacena el operador seleccionado.
2. **Funciones de la Calculadora**:
   - `agregar(valor)`, `limpiar()`, `sumar()`, `restar()`, `multiplicar()`, `dividir()`, `calcular()`.
3. **Eventos de los Botones**: Cada botón de la calculadora tiene un atributo `onclick` que llama a la función correspondiente cuando se hace clic en él.

## Funcionamiento de la Calculadora

1. El usuario ingresa los números presionando los botones numéricos, los cuales llaman con el evento onClick() a la funcion agregar() la cual se encarga de concatenar el valor de cada boton numérico con el valor del botón anterior hasta que el usuario llame a otra función
   NOTA: Cuando hablamos del value dentro de cualquier input, nos referimos a un valor de tipo `string`, por ende los valores se concatenan con el operador +=.
2. Cuando el usuario selecciona un operador, la función correspondiente se ejecuta haciendo un push a const numeros que es de tipo Array, luego se ejecuta la funcion `limpiar()` para borrar el valor anterior del display y asignamos el operador a la variable operador declarada al inicio del documento.
3. Cuando el usuario presiona el botón "=", la función `calcular()` se ejecuta escribiendo de nuevo el segundo valor del array haciendo un push del valor actual del display.
   Posterior se borra el valor del display con la función `limpiar()` y ejecutamos un ciclo for con casos para cada posible operador. Aquí dependiendo del tipo de operador usado para el calculo, haremos una operación u otra, y al terminar, salimos del bucle por medio del `break`.
   Por último asignamos el nuevo valor al display que sera igual al valor del la variable let resultado dependiendo el case usado en el bucle for, para seguir con la eliminación de valores en el array y la reasignación de valor null a la variable operador.
4. El usuario puede presionar el botón "borrar" para limpiar la pantalla.

## Créditos

Construido por: [Samuel Camargo]
