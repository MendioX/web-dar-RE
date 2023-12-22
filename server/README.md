# API de Servidor Express para DPMS

Este servidor Express es parte de la aplicación Dar Por Más Sonrisas y proporciona una API para administrar campañas y realizar operaciones de registro. A continuación, se explican las principales funciones del servidor.

## Conexión a la Base de Datos

El servidor se conecta a una base de datos MySQL utilizando la biblioteca `mysql`. La configuración de la conexión se realiza de la siguiente manera:

```javascript
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root2",
  password: "admin",
  database: "dar_db"
});
```



## Obtener Todas las Campañas
- **Ruta:** `GET /campains`
- Esta ruta se utiliza para recuperar todas las campañas almacenadas en la base de datos.
- Se ejecuta una consulta SQL para seleccionar todos los registros de campañas y se responde con un objeto JSON que contiene los resultados.
- En caso de error, se devuelve un mensaje de error.

## Crear una Nueva Campaña
- **Ruta:** `POST /newCampains`
- Esta ruta permite la creación de una nueva campaña en la base de datos.
- Requiere un objeto JSON en el cuerpo de la solicitud con los siguientes campos: `name`, `location`, `date`, `manager` y `token`.
- Se verifica el token de autenticación contra una variable de entorno `TOKEN_SERVER_EXPRESS`.
- Si la autenticación es exitosa, se realiza una inserción en la base de datos con la información de la campaña.
- Se responde con un mensaje de éxito o error.

```JSON
{
  "name": "Escuela14",
  "location": "narnia",
  "date": "15/05/2023",
  "manager": "cosme",
  "token": "123456"
}

```

## Incrementar el Campo "registered" de una Campaña
- **Ruta:** `POST /registrer/:id`
- Esta ruta se utiliza para incrementar en 1 el campo "registered" de una campaña específica en la base de datos.
- El ID de la campaña se captura desde la URL y se utiliza en la consulta SQL.
- Se responde con un mensaje de éxito o error.


## Incrementar el Campo "registered" de una Campaña
- **Ruta:** `POST /updateDonors/:id`
- Esta ruta se utiliza para actualizar el campo "donors" de un registro cuyo id se referncia en el endpoint.
- El ID de la campaña se captura desde la URL y se utiliza en la consulta SQL.
- Se responde con un mensaje de éxito o error.

```JSON
{
  "donors": "5",
}
```

## Iniciar el Servidor
- El servidor se inicia en el puerto 8081 y se muestra un mensaje en la consola cuando está listo para recibir solicitudes.
