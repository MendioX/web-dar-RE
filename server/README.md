<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API de Servidor Express para Dar Por Más Sonrisas</title>
</head>
<body>
    <h1>API de Servidor Express para Dar Por Más Sonrisas</h1>

    <p>Este servidor Express es parte de la aplicación de Dar Por Más Sonrisas y proporciona una API para administrar campañas y realizar operaciones de registro. A continuación, se explican las principales funciones del servidor.</p>

    <h2>Conexión a la Base de Datos</h2>

    <p>El servidor se conecta a una base de datos MySQL utilizando la biblioteca <code>mysql</code>. La configuración de la conexión se realiza de la siguiente manera:</p>

    <pre><code>
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root2",
  password: "admin",
  database: "dar_db"
});
    </code></pre>

    <h2>Obtener Todas las Campañas</h2>

    <h3>Ruta: <code>GET /campains</code></h3>

    <p>Esta ruta se utiliza para recuperar todas las campañas almacenadas en la base de datos. Se ejecuta una consulta SQL para seleccionar todos los registros de campañas y se responde con un objeto JSON que contiene los resultados. En caso de error, se devuelve un mensaje de error.</p>

    <h2>Crear una Nueva Campaña</h2>

    <h3>Ruta: <code>POST /newCampains</code></h3>

    <p>Esta ruta permite la creación de una nueva campaña en la base de datos. Requiere un objeto JSON en el cuerpo de la solicitud con los siguientes campos: <code>name</code>, <code>location</code>, <code>date</code>, <code>manager</code> y <code>token</code>. Se verifica el token de autenticación contra una variable de entorno <code>TOKEN_SERVER_EXPRESS</code>. Si la autenticación es exitosa, se realiza una inserción en la base de datos con la información de la campaña. Se responde con un mensaje de éxito o error.</p>

    <h2>Incrementar el Campo "registered" de una Campaña</h2>

    <h3>Ruta: <code>POST /registrer/:id</code></h3>

    <p>Esta ruta se utiliza para incrementar en 1 el campo "registered" de una campaña específica en la base de datos. El ID de la campaña se captura desde la URL y se utiliza en la consulta SQL. Se responde con un mensaje de éxito o error.</p>

    <h2>Iniciar el Servidor</h2>

    <p>El servidor se inicia en el puerto 8081 y se muestra un mensaje en la consola cuando está listo para recibir solicitudes.</p>

    <pre><code>
App.listen(8081, () => {
    console.log("listening");
});
    </code></pre>

    <h2>Configuración de Variables de Entorno</h2>

    <p>El token de autenticación se carga desde una variable de entorno <code>TOKEN_SERVER_EXPRESS</code>. Asegúrate de configurar esta variable según tus necesidades antes de ejecutar el servidor.</p>

    <p>Este servidor proporciona funcionalidad esencial para administrar campañas y realizar operaciones de registro. Asegúrate de que tu base de datos esté configurada correctamente y que las rutas sean accesibles desde tu aplicación cliente.</p>

    <p>Para ejecutar el servidor, asegúrate de haber instalado todas las dependencias necesarias y ejecuta el archivo <code>server.js</code>.</p>
</body>
</html>
