# Reto 2 - Implementación de historias de usuario

## Desarrollo

Tomando como base el siguiente caso de uso y criterios de aceptación, desarrollar un programa que mediante terminal
permita dar de alta nuevos usuarios. Implementar las pruebas correspondientes siguiendo la metodología agil de tu
elección.

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
