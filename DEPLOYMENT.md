# 🚀 Guía de Deployment - APEX Design System

Guía paso a paso para publicar tu Storybook en internet (súper fácil, te lo prometo).

---

## 📋 Lo que necesitas antes de empezar

- ✅ Cuenta de GitHub (ya la tienes)
- ✅ Tu proyecto subido a GitHub (ya está)
- ✅ Cuenta de Vercel (gratis) - la crearemos juntos

**Tiempo total:** 10-15 minutos (mayoría es espera)

---

## 🎯 Paso 1: Crear cuenta en Vercel

### ¿Qué es Vercel?
Es como YouTube pero para sitios web. Subes tu código y ellos lo hacen funcionar online. Es **100% gratis** para tu caso.

### Cómo crear la cuenta:

1. Ve a [vercel.com](https://vercel.com)
2. Click en **"Sign Up"** (arriba a la derecha)
3. Click en **"Continue with GitHub"**
4. GitHub te preguntará si autorizas a Vercel → Click **"Authorize Vercel"**
5. ¡Listo! Ya tienes cuenta

**💡 Tip:** No necesitas tarjeta de crédito ni nada de eso.

---

## 🔗 Paso 2: Conectar tu proyecto

Ahora vas a decirle a Vercel dónde está tu código.

### Instrucciones:

1. Estás en el Dashboard de Vercel (página principal después de crear cuenta)
2. Click en el botón **"Add New..."** (arriba a la derecha)
3. Selecciona **"Project"** en el menú que sale
4. Te aparece una lista de tus repositorios de GitHub
5. Busca **"saas-design-system"** (o "apex-design-system")
6. Click en **"Import"** al lado del nombre

**🎯 ¿No ves tu repositorio?**
- Scroll hacia abajo, hay muchos
- O usa el buscador arriba que dice "Search..."

---

## ⚙️ Paso 3: Configurar el proyecto

Vercel te muestra una pantalla con opciones. No te asustes, es súper simple.

### Configuración necesaria:

En la pantalla de "Configure Project", verifica estos campos:

| Campo | Valor que debe tener |
|-------|---------------------|
| **Framework Preset** | Other |
| **Build Command** | `npm run build-storybook` |
| **Output Directory** | `storybook-static` |
| **Install Command** | `npm install --legacy-peer-deps` |

**💡 Nota importante:**
- Si Vercel puso automáticamente los valores correctos, ¡perfecto! No cambies nada.
- Si ves que dice algo diferente, cámbialo manualmente usando los valores de la tabla.

### Luego:

1. Scroll hacia abajo
2. Click en el botón grande azul que dice **"Deploy"**
3. ¡Ya está! Ahora solo espera...

---

## ⏱️ Paso 4: Esperar el build (3-4 minutos)

Vercel ahora está trabajando. Verás una pantalla con:
- Un animation bonito (cohete volando o similar)
- Mensajes que van apareciendo ("Installing dependencies...", "Building...", etc.)
- Una barra de progreso

### Lo que está pasando detrás:
1. **Instalando** - Descarga todas las librerías que usa tu proyecto (~2 min)
2. **Building** - Construye tu Storybook como archivos estáticos (~1 min)
3. **Deploying** - Lo sube a internet (~30 seg)

**🎉 Cuando termine:** Verás confetti (o una animación de celebración) y un mensaje "Congratulations!"

---

## 🌐 Paso 5: Obtener tu link público

¡Tu Storybook ya está online!

### Encontrar tu URL:

En la pantalla de éxito verás:
- Un preview (vista previa) de tu sitio
- Un link tipo: `https://apex-design-system.vercel.app`
- Botones para **"Visit"** y **"Continue to Dashboard"**

### Probar que funciona:

1. Click en **"Visit"** (o copia el link)
2. Se abre tu Storybook en el navegador
3. Verifica que se vea bien:
   - ✅ Logo APEX aparece
   - ✅ Componentes funcionan
   - ✅ Dark mode funciona
   - ✅ Todo se ve como en tu computadora

**💡 ¿Algo se ve raro?** No te preocupes, ve a la sección "Problemas comunes" abajo.

---

## 🔄 Bonus: Actualizaciones automáticas

La magia de Vercel es que ahora, **cada vez que hagas cambios**:

### Proceso automático:

1. Haces cambios en tu código local
2. Ejecutas en terminal:
   ```bash
   git add .
   git commit -m "Descripción del cambio"
   git push
   ```
3. **Vercel detecta el cambio automáticamente**
4. Reconstruye y redespliega (3 minutos)
5. Tu sitio se actualiza solo

**📧 Además:** Recibes un email cada vez que se despliega con éxito o si hay algún error.

---

## ✨ Paso 6: Actualizar el README

Ahora que tienes el link público, actualiza tu README:

### Editar el archivo:

1. Abre `README.md` en tu editor
2. Busca esta línea:
   ```markdown
   [📚 View Live Demo](https://your-apex-storybook.vercel.app)
   ```
3. Reemplaza `https://your-apex-storybook.vercel.app` con **tu link real de Vercel**
4. Guarda el archivo
5. Haz commit y push:
   ```bash
   git add README.md
   git commit -m "Update README with live demo link"
   git push
   ```

**🎯 Resultado:** Ahora tu README tiene el link correcto al demo.

---

## 🎨 Opciones extra (opcional)

### Cambiar el nombre de dominio

¿No te gusta `.vercel.app`? Puedes usar tu propio dominio.

1. En Vercel Dashboard → Click en tu proyecto
2. Pestaña **"Settings"** → **"Domains"**
3. Click **"Add"**
4. Escribe tu dominio (ej: `design.tuempresa.com`)
5. Vercel te da instrucciones de DNS para configurar

**Nota:** Necesitas tener comprado un dominio primero.

### Proteger con contraseña

Si no quieres que sea público todavía:

1. Settings → **"Environment Variables"**
2. Add → Name: `STORYBOOK_PASSWORD`, Value: `tucontraseña`
3. Redeploy el proyecto

**Nota:** Esta función es más avanzada y requiere configuración adicional.

---

## ❗ Problemas comunes

### 1. "Build failed" - El build falló

**Síntomas:** Ves errores rojos en los logs.

**Solución:**
1. Click en **"View Build Logs"**
2. Busca mensajes de error
3. Los más comunes:
   - `peer dependency`: Verifica que el Install Command tenga `--legacy-peer-deps`
   - `module not found`: Algún archivo falta, verifica que todo esté en GitHub
   - `out of memory`: Poco probable, contacta soporte de Vercel

### 2. Página en blanco

**Síntomas:** El sitio carga pero solo ves una página blanca.

**Solución:**
1. Abre la consola del navegador (F12 → Console)
2. Ve si hay errores
3. Verifica que:
   - Los logos existan: `public/apex-logo.svg` y `public/apex-logo-dark.svg`
   - El archivo `.storybook/manager.ts` esté bien
   - No haya errores de paths en los imports

### 3. Los logos no aparecen

**Síntomas:** Storybook funciona pero no ves el logo APEX.

**Solución:**
1. Verifica que los archivos SVG estén en la carpeta `public/`
2. Abre `.storybook/manager.ts`
3. Verifica que las rutas sean: `./apex-logo.svg` y `./apex-logo-dark.svg` (con el punto al inicio)
4. Haz push de los cambios si los corregiste

### 4. Dark mode no funciona

**Síntomas:** El toggle de light/dark no hace nada.

**Solución:**
1. Verifica que el addon themes esté instalado
2. Revisa que `.storybook/preview.ts` tenga la configuración de `withThemeByClassName`
3. Verifica que el CSS tenga las variables para `.dark`

---

## 🆘 ¿Necesitas ayuda?

Si algo no funciona:

1. **Logs de Vercel:** Dashboard → Tu proyecto → Deployments → Click en el último → View Function Logs
2. **Documentación oficial:** [vercel.com/docs](https://vercel.com/docs)
3. **Storybook deployment:** [storybook.js.org/docs/sharing/publish-storybook](https://storybook.js.org/docs/react/sharing/publish-storybook)
4. **Support de Vercel:** [vercel.com/support](https://vercel.com/support)

---

## 🎓 Resumen rápido

Para la próxima vez que quieras desplegar:

```bash
# 1. Hacer cambios en tu código

# 2. Build localmente para probar (opcional)
npm run build-storybook

# 3. Commit y push
git add .
git commit -m "Descripción de cambios"
git push

# 4. ¡Listo! Vercel hace todo automáticamente
```

**⏱️ Tiempo:** ~3 minutos desde push hasta sitio actualizado.

---

## 🎉 ¡Felicidades!

Ya tienes tu APEX Design System publicado en internet. Ahora puedes:

- ✅ Compartir el link en tu CV
- ✅ Enviarlo a empresas en aplicaciones de trabajo
- ✅ Mostrarlo en entrevistas técnicas
- ✅ Agregarlo a tu portfolio de LinkedIn
- ✅ Usarlo como proyecto destacado en GitHub

**Tu link:** `https://tu-proyecto.vercel.app`

¡Compártelo con orgullo! 🚀
