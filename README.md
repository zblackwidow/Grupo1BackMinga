# Grupo1BackMinga - BackEnd - Challenge Final

## **Pasos para Visualizar el Proyecto**

-   [1 - Ejecutamos por Consola para Limpiar la memoria caché en NPM](#1---Ejecutamos-por-Consola-para-Limpiar-la-memoria-caché-en-NPM)
-   [2 - Ejecutamos por Consola para Instalar las Dependencias](#2---Ejecutamos-por-Consola-para-Instalar-las-Dependencias)
-   [3 - Crear un Archivo en el directorio Raiz llamado env y agregar adentro del archivo lo siguiente](#3---Crear-un-Archivo-en-el-directorio-Raiz-llamado-env-y-agregar-adentro-del-archivo-lo-siguiente)
-   [4 - Ejecutamos por Consola para Subir los Datos a la Base de Datos](#4---Ejecutamos-por-Consola-para-Subir-los-Datos-a-la-Base-de-Datos)
-   [5 - Ejecutamos por Consola para Iniciar el Servidor](#5---Ejecutamos-por-Consola-para-Iniciar-el-Servidor)
-   [6 - Equipo de trabajo](#6---Equipo-de-trabajo)


---

### **1 - Ejecutamos por Consola para Limpiar la memoria caché en NPM**

```
npm cache clear --force
```

---

### **2 - Ejecutamos por Consola para Instalar las Dependencias**

```
npm install
```

---

### **3 - Crear un Archivo en el directorio Raiz llamado .env y agregar adentro del archivo lo siguiente**

```
.env
```
```
PORT = 8080
// quitar {} y completa los datos
URI_MONGO = "mongodb+srv://{usuarioMongo}:{contraseña}@{nombreBaseDatos}.w9lh8.mongodb.net/my_tinerary"
SECRET = "{Indica una palabra secreta}"
GOOGLE_CLIENT_ID ="{ID de cliente de Google}"
GOOGLE_CLIENT_SECRET ="{Secreto del cliente de Google}"
GOOGLE_URI_BACK="/api/auth/signIn/google/callback"
```

---

### **4 - Ejecutamos por Consola para Subir los Datos a la Base de Datos**

#### - Cargamos los datos de la Cities y luego tecleamos Control+C y luego S

```
npm run dataUser
```
```
npm run dataComment
```
```
npm run dataCompany
```
```
npm run dataManga
```
```
npm run dataCategory
```
---
### **5 - Ejecutamos por Consola para Iniciar el Servidor**

```
npm run dev
```

---
### **6 - Equipo de trabajo**

- Alejandra Zacarías https://github.com/zblackwidow
- Andres Felipe Manrique Benavides https://github.com/AndresMan95
- Samuel Alejandro Guanchez Damas https://github.com/sagd27
- Javier Enrique Gutierrez Tubinez https://github.com/Javierdrw
- Jesus Alberto Vera Pompa https://github.com/JesusVeraPompa
---
