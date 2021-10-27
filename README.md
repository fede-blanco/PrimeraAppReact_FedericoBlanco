# APLICACION DE PRACTICA PARA EL CURSO DE REACT JS DE CODERHOUSE - Federico Blanco

### E-COMMERCE DE UNA EMPRESA QUE COMERCIALIZA INSTRUMENTOS MUSICALES

#### características

1. 3 categorias de guitarras diferentes mediante las cuales se puede acceder a los distintos tipos de guitarras.
2. Todos los items tienen un boton que renderiza el detalle del mismo, desde el cual podrias agregar una cierta cantidad de dicho item al carrito de compras o volver a la lista de items.
3. Al presionar el boton "agregar al carrito" se renderiza otro boton que te dirige al detalle del carrito.
4. En el detalle del carrito se encuentra una lista con los diferentes items icluidos en el _(nombre, imagen y precio)_ y el valor total de la compra.
5. desde el detalle del carrito se podria eliminar un tipo de item, vaciar el carrito completo o finalizar la compra _(boton que te dirigira al componente Checkout.js que contiene un formulario para ingresar los datos e incluirlos en la orden de compra)_.
6. si el carrito esta vacio renderiza un boton que te dirige al inicio.
7. Al agregar items al carrito se guardan en el sessionStorage y al finalizar la compra luego de haber completado los datos del formulario se borra el sessionStorage.
8. al finalizar la compra se genera una alerta que te indica el id de tu orden de compra.

#### lenguajes & Tecnologías

- HTML
- CSS
- JavaScript
- Bootstrap
- React Js
  1- props
  2- hooks
  3- context
  4- states
  5- Conditional rendering
- React-Router
- Firestore Database _(se realizó guardado de documentos y llamada para obtención de información)_
