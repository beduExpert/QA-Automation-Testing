# Postwork
Recuerda que también puedes consultar tu postwork en la app Bedu


## 🎯 OBJETIVOS

- Implementar pruebas unitarias
- Implementar pruebas de integración
- Implementar pruebas funcionales

## 🚀 DESARROLLO

Durante este post work debemos implementar un endpoint que funja como sistema de autenticación y nos regrese un token
que permita validar la identidad del usuario y sus privilegios en subsecuentes peticiones.

- Define cuál será el plan de pruebas a seguir y describe los casos de uso en formato GIVEN, WHEN, THEN

- Protege el endpoint contra ataques de fuerza bruta

- Se debe contar con pruebas unitarias, de integración y funcionales.

### Sigue estas instrucciones:

1. Dentro del repositorio de postworks crea un documento donde se definan los requerimientos en formato GIVEN, WHEN,
   THEN
2. En el archivo app.js crea una nuevo endpoint con la ruta /authentication
3. Implementa la función getToken dentro del archivo Login.js
4. Si las credenciales son correctas codificar la información del usuario ( {email: "user@mail.com"} ) Puedes utilizar
   la función base64
5. Para proteger contra ataques de fuerza bruta una primera aproximación es limitar el intento de logins para una
   cuenta. Ejemplo, si la cuenta usuario@mail.com acumula tres intentos de inicio de sesión fallidos, bloquear los
   intentos de sesión para esta cuenta por 5 minutos.
6. Añade las pruebas correspondientes en el archivo TestApp.js

### Reflexiones finales 

¿Terminaste la actividad? Responde las siguientes preguntas:

En caso de que un token fuese comprometido ¿Cómo podríamos invalidar el token?
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________
¿Qué estrategia implementaste para proteger el endpoint de ataques de fuerza bruta?
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________

¿Existe duplicidad entre tus pruebas unitarias, de integración y funcionales?
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________


¡Mucho éxito y reta tu potencial!

## ✅ Checklist

Asegúrate que tu postwork contenga todo lo siguiente, ya que esto se evaluará al término del módulo.


- [ ] El endpoint para autenticarse tiene como salida un token con la identidad y privilegios del usuario

- [ ] El endpoint para autenticarse cuenta con al menos un mecanismo para protegerse ante ataques de fuerza bruta

- [ ] Se implementaron prueba unitarias, de integración y funcionales






