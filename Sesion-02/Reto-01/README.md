# Reto 1 - Historias de usuario y BDD

## :dart: Objetivo

- Escribir historias de usuario en formato AS, I WANT, SO
- Anlizar cómo a partir de las historias de usuario se crean los criterios de aceptación específicos.

## Desarrollo

Generar la historia de usuario (formato AS, I WANT, SO) y las descripciones BDD (formato GIVEN, WHEN. THEN) necesarias
para el registro de un usuario en nuestra plataforma.

Requerimientos:

- El usuario se podría registrar utilizando su correo electrónico, cuenta de facebook o cuenta de google.
- La contraseña debera ser de al menos 8 caracteres
- Si un usuario se registra con un correo, ligado a una cuenta de facebook de la que ya existe una cuenta, se le indica
  que el correo indicado ya está registrado y que utilice el botón de Facebook
- Si un usuario se registra con un correo, ligado a una cuenta de Google de la que ya existe una cuenta, se le indica
  que el correo indicado ya está registrado y que utilice el botón de Google
  
  
1. A partir de los requerimientos describe de manera general la tarea que se quiere realizar en el sistema,quién la quiere realizar, cómo la quiere realizar y para qué la quiere realizar. Usa el formato: AS, I WANT, SO.
2. Con la historia de usuario describiendo de forma global la tarea a realizar, ahora describe en detalle el funcionamiento con los criterios de aceptación. Sigue el formato: GIVEN, WHEN. THEN

<details>
  <summary>Solución</summary>
  
1. Como primer paso y tomando en cuenta los requerimientos describiremos de manera general la tarea que se quiere realizar en el sistema,quién la quiere realizar, cómo la quiere realizar y para qué la quiere realizar.

## Historia de usuario Sign up

**AS** un usuario
**I WANT** poder registrarme utilizando mi correo, cuenta de facebook o google
**SO** puedo ingresar a la aplicación con mi cuenta
  
2. Con nuestra historia de usuario describiendo de forma global la tarea a realizar, ahora describiremos en detalle el funcionamiento con los criterios de aceptación

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
