# Reto 1 - Historias de usuario y BDD

## Desarrollo

Generar la historia de usuario (formato AS, WANT, SO) y las descripciones BDD (formato GIVEN, WHEN. THEN) necesarias
para el registro de un usuario en nuestra plataforma.

Requerimientos:

- El usuario se podría registrar utilizando su correo electrónico, cuenta de facebook o cuenta de google.
- La contraseña debera ser de al menos 8 caracteres
- Si un usuario se registra con un correo, ligado a una cuenta de facebook de la que ya existe una cuenta, se le indica
  que el correo indicado ya está registrado y que utilice el botón de Facebook
- Si un usuario se registra con un correo, ligado a una cuenta de Google de la que ya existe una cuenta, se le indica
  que el correo indicado ya está registrado y que utilice el botón de Google

<details>
  <summary>Solución</summary>

## Caso de uso (Sign up)

**AS** un usuario
**I WANT** poder registrarme utilizando mi correo, cuenta de facebook o google
**SO** puedo ingresar a la aplicación con mi cuenta

## Criterios de aceptación

**GIVEN** un usuario
**WHEN** se registra con correo y contraseña
**THEN** se crea su registro en la aplicación

**GIVEN** un usuario
**WHEN** ingresa una contraseña de longitud menor a 8 caracteres
**THEN** se le indica que requiere una contraseña de al menos 8 caracteres

**GIVEN** un usuario
**WHEN** se registra con una cuenta de facebook **sin correo** asociado
**THEN** se crea su registro en la aplicación

**GIVEN** un usuario
**WHEN** se registra con una cuenta de facebook con correo asociado
**THEN** se crea su registro en la aplicación

**GIVEN** un usuario
**WHEN** se registra con una cuenta de google
**THEN** se crea su registro en la aplicación

**GIVEN** un usuario
**WHEN** se registra con un correo del que ya existe una cuenta
**THEN** se le indica que el correo indicado ya ya esta registrado

**GIVEN** un usuario
**WHEN** se registra con un correo, ligado a una cuenta de facebook de la que ya existe una cuenta
**THEN** se le indica que el correo indicado ya ya esta registrado y que utilice el boton de Facebook

**GIVEN** un usuario
**WHEN** se registra con un correo, ligado a una cuenta de google de la que ya existe una cuenta
**THEN** se le indica que el correo indicado ya ya esta registrado y que utilice el boton de google
</details>
