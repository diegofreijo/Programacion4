
# Documentación de Diseño

## Investigaciones

### Cómo obtener el clima de una ciudad

El equipo comenzó el desarrollo del proyecto investigando de que manera se podría obtener la temperatura de una ciudad. Para ello, buscamos alguna API gratuita y que devuelva un JSON con la temperatura actual para cualquier ciudad. Encontramos varias opciones como: 

- posibilidad 1
- posibilidad 2
- open-meteo.com

La mejor opción para nosotros es la última porque nos pareció la más sencilla de usar y además porque blablablabla...

### Como enviar alertas

Como no había ningún requerimiento, el equipo decidió que la alerta sea por email. La aplicación va a tener hardcodeada la dirección del usuario a donde mandarla. En un futuro, y si así lo requiere, podríamos permitirle al usuario gestionar su dirección o agregar más de una.

## Decisiones de modelado

### Modelo

Arrancamos el proceso de DDD eligiendo 3 entidades:

- `Ciudad` que va a tener la información necesaria para obtener el clima en todo momento (por ejemplo, el nombre completo de la ciudad junto a su país). Además va a guardar la última temperatura registrada en ella.
- `Listado` que representa la información de lo que el usuario planteó como "pantalla inicial". Representa al listado de todas las ciudades que el usuario está siguiendo.
- `Alerta`. Acá tuvimos dudas, pero el equipo creyó que una alerta tenía la importancia suficiente como para ser considerada una entidad. Esto nos permite agregarle datos como la hora a la que se disparó, adonde se notificó y la ciudad a la que pertenece la alerta. En un futuro se le podría agregar más información como una explicación de por qué se disparó (por mucho frío o mucho calor) entre otras.

### Métodos que expone el modelo

Nos pareció que `Ciudad` necesitaba solamente acciones para creación y borrado. Modificaciones no hacen falta porque total modificar una ciudad es lo mismo que borrarla y agregarla de nuevo. Y no se consultan directamente, esa es tarea del Listado.

Listado solo necesita la acción de consultar. Probablemente en la base de datos no se guarde un Listado como tal. Solamente hay que guardar las Ciudades que el usuario agregó. El Listado lo arma el backend consultando todas las ciudades almacenadas.

Para las alarmas, nos pareció que la solución más sencilla sería que un proceso de cron en el servidor llame cada una hora a una función que verifique si hay ciudades que cumplan los requisitos para una nueva alerta. Y la manden por email.

