# Equipo Winnipeg ❄️

![](/public/images/winnipeg.png)

¡Bienvenidos equipo Winnipeg! Sabíamos que no nos ibáis a decepcionar. Habéis encontrado el repositorio, y eso nos da algo de esperanza, pero esto es solo el primer paso. Aún no sabéis de qué es la aplicación, pero todavía no confiamos suficientemente en vosotros como para daros esa información. *Si esta parte sale bien, quizá...*

---

## Misión actual 🔓

### Preparación 💻

Este repositorio se ha generado mediante `express-generator` y es el que vais a usar para llevar a cabo todo el desarrollo. Lo primero que tenéis que hacer es hacer el setup para poder trabajar mediante **git colaborativo**. 

Ahora:

- El capitán o capitana del equipo se debe forkear el repositorio
- Todos los miembros deben clonarlo desde **la cuenta de github del capitán/a**
- El capitán/a debe daros permisos a todos para poder escribir en el código. Debéis aceptar esos permisos (os llegará un correo).
- Todos los miembros deben cambiar el nombre del archivo `sample.env` por `.env`.
- Una vez hecho, debéis ejecutar `npm install`
- Probad que todo funciona correctamente ejecutando `npm run dev`

⚠️ El repositorio tiene todos los paquetes que vais a necesitar ya instalados.

Además, se ha creado una base de datos en Mongo Atlas para vosotros, para que **todos veais la misma base de datos**, en vez de correr Mongo en local. Si os fijáis en el archivo .env, la dirección es diferente. No tenéis que tocarla. 

Para visualizar la base de datos desde Mongo Compass, todos tenéis que clicar en *Connect > New connection*, y añadir esta dirección:

```bash
mongodb+srv://admin:admin@winnipegdb.vlodzpu.mongodb.net/winnipegDB
```

Veréis que por defecto se crean dos colecciones: admin y local. Es correcto, no hace falta hacer nada con ellas.

---

### Primer paso 🔐

Lo primero que tenéis que hacer son las rutas de autenticación:

```bash
GET /auth/signup
POST /auth/signup
GET /auth/login
POST /auth/login
GET /auth/logout
```

Podéis repartiros las tareas como vosotros consideréis, y hacer las vistas como vosotros creáis conveniente. Solo hay una norma: cada feature debe tener una rama, y una vez terminado, debéis ir haciendo merge a la rama `dev`. 

La rama `dev` ya existe, y todos podéis ir a ella haciendo `git checkout dev`. Os recomendamos que repaséis la chuleta de git colaborativo y que, en las primeras iteraciones, os ayudéis los unos a los otros.

Antes de llevar a cabo esta tarea, solo hay un problema, y es que **el modelo de User se ha perdido**, por lo que, al no saber qué campos serán necesarios, no podemos avanzar. Lo vieron por última vez [no muy lejos...](https://www.alebausa.com/winnipeg-user). 

Por cierto, ¿sabéis a qué hace referencia la B de bcrypt?

