## Prueba Técnica para Desarrollador Back-end Junior con Node.js y TypeScript
### Contexto:

La empresa necesita un sistema de gestión de tareas (similar a un "to-do list"), pero enfocado en equipos de trabajo. El sistema permitirá que los usuarios se registren, creen equipos, asignen tareas a los miembros del equipo y gestionen el estado de estas tareas.

### Requerimientos:

#### 🔧 Tecnologías y Herramientas:
- **Node.js** con TypeScript.
- **Express.js** para el framework de servidor.
- **MongoDB** como base de datos (puede usar Mongoose para ODM).
- **JWT** para autenticación.
- **Jest** para pruebas unitarias.
- **Docker** (opcional, pero recomendado).

#### 📄 Entregables:
- Código fuente en un repositorio Git (puede ser en GitHub, GitLab, etc.).
- Documentación mínima sobre cómo correr la aplicación y los tests.
- Pruebas unitarias para al menos un servicio o controlador.

### Funcionalidades a Implementar:

    1. Registro y Autenticación de Usuarios:
        - Los usuarios deben poder registrarse con un email y contraseña.
        - Implementa autenticación con JWT.
        - Protege las rutas que requieren autenticación.

    2. Gestión de Equipos:
        - Los usuarios autenticados pueden crear equipos.
        - Los usuarios pueden invitar a otros usuarios a unirse a su equipo.
        - Los usuarios pueden ver todos los equipos a los que pertenecen.

    3. Gestión de Tareas:
        - Los usuarios pueden crear tareas dentro de un equipo.
        - Las tareas pueden ser asignadas a un miembro del equipo correspondiente.
        - Las tareas tienen un estado (Pendiente, En Progreso, Completada).
        - Los usuarios pueden actualizar el estado de las tareas.

    Pruebas:
        Escribe pruebas unitarias para las funcionalidades críticas como autenticación y gestión de tareas.

    Extras (Opcional):
        Configurar Docker para correr la aplicación y MongoDB en contenedores.
        Implementar manejo de errores y validaciones más complejas.
        Agregar permisos y roles (e.g., solo el creador del equipo puede invitar a nuevos miembros).

### Criterios de Evaluación:

1. Calidad del Código: Buenas prácticas de desarrollo, uso adecuado de TypeScript, organización del código.
2. Funcionalidad: Que la API cumpla con los requerimientos especificados.
3. Documentación: Instrucciones claras para correr la aplicación y ejecutar las pruebas.
4. Pruebas: Calidad y cobertura de las pruebas unitarias.
5.  Manejo de Errores: Robustez en el manejo de errores y validaciones.
6.  Uso de Git: Uso claro y ordenado de commits en el repositorio.
