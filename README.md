# WebSocket


README
Este proyecto consiste en la creación de diferentes vistas utilizando Handlebars, un motor de plantillas para JavaScript. Además, incluye la implementación de dos vistas específicas que permiten agregar usuarios y productos nuevos mediante el uso de WebSockets.

Descripción del Proyecto
El proyecto utiliza Handlebars para generar vistas dinámicas que facilitan la interacción del usuario con la aplicación. Handlebars nos permite crear plantillas reutilizables que se pueden renderizar fácilmente con diferentes datos proporcionados desde el servidor.

Funcionalidades
Vistas Generadas con Handlebars
El proyecto cuenta con varias vistas generadas dinámicamente mediante Handlebars. Estas vistas incluyen:

Página de inicio (con la vista de todos los productos)
Página de productos (con la vista tanto del formulario como de los productos)
Página de usuarios (con la vista del formulario para registrar nuevos usuarios)
Página de detalles de usuario (con la vista del perfil de un usuario especifico)

Vistas con WebSocket
Dos vistas específicas, "Agregar Usuario" y "Agregar Producto", utilizan WebSockets para proporcionar una experiencia en tiempo real al agregar nuevos usuarios y productos:

Agregar Usuario: Permite a los usuarios completar un formulario para agregar nuevos usuarios a la base de datos. Los datos ingresados se envían al servidor a través de WebSockets y se reflejan inmediatamente en la lista de usuarios sin necesidad de recargar la página.

Agregar Producto: Similar a la vista de "Agregar Usuario", esta vista permite a los usuarios agregar nuevos productos a la base de datos mediante un formulario. Los nuevos productos se muestran en la lista de productos en tiempo real sin requerir una recarga de la página.

Estas vistas aprovechan la tecnología de WebSockets para ofrecer una experiencia de usuario más interactiva y fluida al tiempo que mantienen la sincronización de datos en tiempo real entre el cliente y el servidor.

Tecnologías Utilizadas
Handlebars: Motor de plantillas para generar vistas dinámicas.
WebSocket: Protocolo de comunicación bidireccional que permite la comunicación en tiempo real entre el cliente y el servidor.
HTML/CSS/JavaScript: Tecnologías estándar para la construcción de aplicaciones