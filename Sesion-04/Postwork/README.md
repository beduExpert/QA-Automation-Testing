# Postwork
Recuerda que tambi茅n puedes consultar tu postwork en la app Bedu


## 馃幆 OBJETIVOS

- Implementar pruebas unitarias
- Implementar pruebas de integraci贸n
- Implementar pruebas funcionales

## 馃殌 DESARROLLO

Durante este post work debemos implementar un endpoint que funja como sistema de autenticaci贸n y nos regrese un token
que permita validar la identidad del usuario y sus privilegios en subsecuentes peticiones.

- Define cu谩l ser谩 el plan de pruebas a seguir y describe los casos de uso en formato GIVEN, WHEN, THEN

- Protege el endpoint contra ataques de fuerza bruta

- Se debe contar con pruebas unitarias, de integraci贸n y funcionales.

### Sigue estas instrucciones:

1. Dentro del repositorio de postworks crea un documento donde se definan los requerimientos en formato GIVEN, WHEN,
   THEN
2. En el archivo app.js crea una nuevo endpoint con la ruta /authentication
3. Implementa la funci贸n getToken dentro del archivo Login.js
4. Si las credenciales son correctas codificar la informaci贸n del usuario ( {email: "user@mail.com"} ) Puedes utilizar
   la funci贸n base64
5. Para proteger contra ataques de fuerza bruta una primera aproximaci贸n es limitar el intento de logins para una
   cuenta. Ejemplo, si la cuenta usuario@mail.com acumula tres intentos de inicio de sesi贸n fallidos, bloquear los
   intentos de sesi贸n para esta cuenta por 5 minutos.
6. A帽ade las pruebas correspondientes en el archivo TestApp.js

### Reflexiones finales 

驴Terminaste la actividad? Responde las siguientes preguntas:

En caso de que un token fuese comprometido 驴C贸mo podr铆amos invalidar el token?
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________
驴Qu茅 estrategia implementaste para proteger el endpoint de ataques de fuerza bruta?
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________

驴Existe duplicidad entre tus pruebas unitarias, de integraci贸n y funcionales?
_________________________________________________________________________________________________________________________________________________________________________________________________________________________________


隆Mucho 茅xito y reta tu potencial!

## 鉁? Checklist

Aseg煤rate que tu postwork contenga todo lo siguiente, ya que esto se evaluar谩 al t茅rmino del m贸dulo.


- [ ] El endpoint para autenticarse tiene como salida un token con la identidad y privilegios del usuario

- [ ] El endpoint para autenticarse cuenta con al menos un mecanismo para protegerse ante ataques de fuerza bruta

- [ ] Se implementaron prueba unitarias, de integraci贸n y funcionales






