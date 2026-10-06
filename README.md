# Catálogo En React
## Catálogo de tecnología creado con React + Javascript y Vite.

## Requisitos previos

- [Node.js](https://nodejs.org/) (versión 20.19 o superior recomendada)
- npm (viene incluido con Node.js)
- [Git](https://git-scm.com/)

Para verificar que los tienes instalados:

```bash
node -v
npm -v
git --version
```

## Cómo iniciar el proyecto

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/Atlost-dev/CatalogoInteractivo-React.git
   ```

2. **Entra a la carpeta del proyecto**

   ```bash
   cd CatalogoInteractivo-React
   ```

3. **Instala las dependencias**

   ```bash
   npm install
   ```

4. **Inicia el servidor de desarrollo**

   ```bash
   npm run dev
   ```

5. **Abre el proyecto en el navegador**

   Vite mostrará en la terminal una dirección, normalmente [http://localhost:5173](http://localhost:5173). Ábrela en tu navegador.

## Scripts disponibles

| Comando           | Descripción                                          |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con recarga en vivo |
| `npm run build`   | Genera la versión de producción en la carpeta `dist` |
| `npm run preview` | Previsualiza localmente la versión de producción     |
| `npm run lint`    | Revisa el código con ESLint                          |

## Tecnologías

- React 19
- JavaScript
- Vite
- ESLint

## Problemas comunes

- **`npm: command not found`**: instala Node.js desde su página oficial y reinicia la terminal.
- **El puerto 5173 está ocupado**: Vite usará otro puerto automáticamente; revisa la dirección que aparece en la terminal.
- **Errores después de actualizar el proyecto**: borra la carpeta `node_modules` y vuelve a ejecutar `npm install`.
