# Labo07_Web

## ¿Cuál es la diferencia entre autenticación y autorizacion?
La autenticación consiste en verificar la identidad del usuario que realiza la solicitud al servidor;
en una API REST esto se implementa normalmente mediante un endpoint de login donde el usuario envía sus credenciales (usuario y contraseña), y si son válidas, el servidor genera un token JWT 
que el cliente almacena y envía en futuras solicitudes para probar su identidad. Por otro lado, la autorización determina qué recursos o acciones puede realizar ese usuario autenticado; se 
implementa en el servidor mediante middlewares que verifican el token y los roles o permisos asociados antes de permitir el acceso a cada endpoint. En resumen, la autenticación responde a la 
pregunta “¿quién eres?” y se centra en identificar al usuario, mientras que la autorización responde a “¿qué puedes hacer?” y controla los permisos dentro de la aplicación.


## ¿Cuál es la función del token JWT en la guía?
El token JWT (JSON Web Token) tiene la función principal de probar y mantener la identidad del usuario en cada solicitud al servidor. Después de que el usuario inicia sesión con su correo y 
contraseña, el servidor genera un token JWT que contiene información sobre el usuario, como su ID, y lo envía al cliente
