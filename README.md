# 🎮 PokédexApp

![Angular](https://img.shields.io/badge/Angular-17+-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Ionic](https://img.shields.io/badge/Ionic-7.0-blue?style=for-the-badge&logo=ionic)
![Supabase](https://img.shields.io/badge/Supabase-green?style=for-the-badge&logo=supabase)

Aplicación web desarrollada durante mis prácticas de FP en Desarrollo de Aplicaciones Web. Consume la **PokéAPI** para mostrar información detallada de los pokémon, con autenticación de usuarios y sistema de favoritos.

---


## URL de producción

https://pokedex-app-rzdp.vercel.app

## 🚀 Stack tecnológico

- **Angular 17+** → Framework principal
- **TypeScript** → Lenguaje de programación
- **Ionic** → Componentes UI nativos
- **Supabase** → Base de datos, autenticación y storage
- **PokéAPI** → API REST pública de pokémon

---

## 🏗️ Arquitectura del proyecto
src/app/
├── pages/
│   ├── home/          → Selección de generaciones
│   ├── generacion/    → Lista de pokémon por generación
│   ├── detalle/       → Detalle de cada pokémon
│   ├── favoritos/     → Pokémon favoritos del usuario
│   ├── perfil/        → Perfil de usuario con avatar
│   ├── login/         → Inicio de sesión
│   ├── registro/      → Registro de usuario
│   └── about/         → Información del autor
├── components/
│   └── carta-pokemon/ → Componente reutilizable de carta
├── services/
│   ├── pokemon.ts     → Servicio para la PokéAPI
│   ├── supabase.ts    → Servicio para Supabase
│   └── auth.ts        → Servicio de autenticación
├── guards/
│   └── auth.guard.ts  → Protección de rutas privadas
└── models/
└── pokemon/       → Interfaces de TypeScript

---

## ⚙️ Instalación

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/pokedex-app.git

# Entra en la carpeta
cd pokedex-app

# Instala las dependencias
npm install

# Arranca la app
ng serve
```

Abre **http://localhost:4200** en el navegador.

---

## ✨ Funcionalidades

- 🏠 **Home** → Selección de generación (I, II, III, IV)
- 📋 **Lista** → Pokémon por generación con scroll infinito
- 🔍 **Buscador** → Busca cualquier pokémon por nombre
- 🎯 **Filtro por tipo** → Filtra por fuego, agua, planta...
- 📄 **Detalle** → Info completa: stats, tipos, habilidades
- ❤️ **Favoritos** → Guarda tus pokémon favoritos
- 👤 **Perfil** → Avatar de usuario con Supabase Storage
- 🔐 **Autenticación** → Login y registro con Supabase
- 🛡️ **Rutas protegidas** → Guard de autenticación

---

## 👨‍💻 Autor

**Eloy Pozo Esteban**  
Estudiante de DAW en IES Serra Perenxisa  
Prácticas en empresa · Abril - Mayo 2025