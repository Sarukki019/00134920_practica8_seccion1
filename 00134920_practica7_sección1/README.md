¿Cuál es la diferencia entre autenticación y autorizacion?

Autenticación (authentication): comprobar que quien dice ser un usuario realmente lo es. Ej.: login con email/contraseña — si son correctos, el sistema identifica al usuario (crea una sesión o emite un token).

Autorización (authorization): decidir qué puede hacer ese usuario autenticado. Ej.: mismo usuario puede leer sus propios datos pero no los de otros; roles/privilegios determinan acceso a rutas y operaciones.

¿Cuál es la función del token JWT en la guía?

JWT actúa como prueba de identidad compacta y firmada que el servidor emite al hacer login. El cliente guarda el token y lo envía en cada petición. El servidor verifica la firma y la expiración del JWT y extrae las claims (por ejemplo userId, role) para autenticar la petición y aplicar las reglas de autorización de forma stateless.
