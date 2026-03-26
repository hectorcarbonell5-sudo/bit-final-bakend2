# 🥐 Backend Panadería - API REST

Backend desarrollado para la gestión de una panadería, construido con **Node.js**, **Express** y **MongoDB**.  
Esta API permite administrar productos, pedidos y usuarios, proporcionando una base sólida para aplicaciones web o móviles relacionadas con la gestión de una panadería.

---

# 📌 Tecnologías utilizadas

- Node.js – Entorno de ejecución para JavaScript en el servidor
- Express.js – Framework para la creación de APIs REST
- MongoDB – Base de datos NoSQL
- Mongoose – ODM para modelar los datos en MongoDB
- Nodemon – Herramienta para desarrollo que reinicia el servidor automáticamente

---

# 📂 Estructura del proyecto
bakery-backend/

│
├── src/
│ ├── controllers/ # Lógica de negocio
│ ├── models/ # Modelos de MongoDB
│ ├── routes/ # Rutas de la API
│ ├── config/ # Configuración de base de datos
│ └── app.js # Configuración principal de Express
│
├── .env # Variables de entorno
├── package.json
└── server.js # Punto de entrada del servidor


---

# ⚙️ Instalación del proyecto

## 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tuusuario/bakery-backend.git
2️⃣ Entrar al proyecto
cd bakery-backend
3️⃣ Instalar dependencias
npm install
4️⃣ Configurar variables de entorno

Crear un archivo .env

PORT=3000
MONGODB_URI=mongodb://localhost:27017/panaderia
5️⃣ Ejecutar el servidor

Modo desarrollo:

npm run dev

Modo producción:


  "name": "Pan francés",
  "price": 500,
  "description": "Pan tradicional recién horneado",
  "stock": 100,
  "category": "pan"
}
🔒 Buenas prácticas implementadas
Arquitectura basada en MVC
Separación de responsabilidades
Uso de variables de entorno
Manejo de errores en la API
Conexión centralizada a la base de datos
🚀 Futuras mejoras
Implementación de autenticación con JWT
Sistema de usuarios y roles
Documentación de API con Swagger
Integración con frontend
Sistema de carrito de compras
👨‍💻 Autor

Hector Carbonell
Desarrollador Web





- **Imagen del proyecto**
- **Documentación de API**
- **Guía para desplegar en Render o MongoDB Atlas**
- **README que impresiona a reclutadores**.
