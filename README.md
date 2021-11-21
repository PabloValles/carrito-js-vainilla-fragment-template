# Carrito de conpras con Vainilla JS - Fragment - Template

## Consideraciones paso a paso

A continuación detallo como hice el proceso

### 1) Crear el html -> con el Template

Recordando que el template no lo carga el navegador hasta que nosotros lo utilizamos con js:

En ésta sección se ira agregando las frutas que compramos
`<ul class="list-group" id="carrito">`

```
<template id="template">
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="lead">A list item</span>
        <span class="badge bg-primary rounded-pill">14</span>
    </li>
</template>
```

### 2) Nuestro App.js
