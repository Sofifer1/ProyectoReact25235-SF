# React + Vite
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# 🛒 Proyecto E-Commerce React JS

Aplicación web desarrollada con **React JS** que implementa un sistema completo de **gestión de productos**, **carrito de compras** y **autenticación de usuarios**, consumiendo una **MockAPI** y desplegada en **Vercel**.

---

## 🚀 Demo en Producción

🔗 **URL del proyecto:**  
https://proyecto-react25235-sf.vercel.app/
---

## 📌 Características Principales

### 🔐 Autenticación de Usuarios
- Registro e inicio de sesión de usuarios
- Manejo de sesión (login / logout)
- Protección de rutas privadas
- Persistencia de sesión (LocalStorage)

---

### 🛍️ Gestión del Carrito de Compras
- Agregar y eliminar productos del carrito
- Actualizar cantidades
- Cálculo automático del total
- Persistencia del carrito

---

### 📦 CRUD de Productos (MockAPI)
Administración completa del catálogo de productos utilizando **MockAPI**:

- ➕ Crear productos
- 📄 Listar productos
- ✏️ Editar productos
- 🗑️ Eliminar productos

Datos gestionados vía API REST simulada.

---

### 🔍 Búsqueda y Paginación
- Búsqueda de productos por nombre
- Paginación para mejorar el rendimiento
- Navegación clara y eficiente

---

### 📱 Optimización de Diseño y Responsividad
- Diseño responsive (Mobile First)
- Compatible con dispositivos móviles, tablets y desktop
- UI optimizada para una mejor experiencia de usuario

---

### ☁️ Despliegue en Vercel
- Deploy automático desde GitHub
- HTTPS y dominio proporcionado por Vercel
- Integración CI/CD con cada push al repositorio

---

## 🛠️ Tecnologías Utilizadas

- **React JS**
- **React Router DOM**
- **Context API / Hooks**
- **MockAPI**
- **CSS / Tailwind / Bootstrap** (ajusta según uses)
- **Vercel**

---

## ⚙️ Instalación y Ejecución Local
### 1 Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repositorio.git
### 2 Accede al proyecto
cd tu-repositorio
### 3 Accede al proyecto
npm install
### 4 Ejecutar proyecto
npm run dev

---

 template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
