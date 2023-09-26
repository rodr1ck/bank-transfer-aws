# Proyecto Final AWS: Sistema de Transferencia Bancaria

## Descripción
El proyecto se centra en desplegar una aplicación backend construida en Node.js que permite gestionar transferencias bancarias y destinatarios. Esta aplicación funciona en la nube de AWS.

## URL del Backend Desplegado
[Link del backend](https://you-AWS-url.com/dev/)

### Healthcheck
Al visitar [este enlace](https://you-AWS-url/dev/healthcheck), se recibe un mensaje: "Server is ok".

## Proceso de Despliegue y Configuración en AWS

1. **Serverless Framework**: Se utilizó Serverless Framework para automatizar el despliegue de funciones Lambda y configurar API Gateway en AWS.
2. **DynamoDB**: Se eligió DynamoDB debido a su naturaleza escalable y su integración sin problemas con AWS Lambda.
3. **IAM**: Se configuraron los roles y políticas necesarios para permitir que las funciones Lambda interactúen con DynamoDB.
4. **API Gateway**: Se configuró para exponer las funciones Lambda como endpoints HTTP.

## Arquitectura
El sistema consta de varias funciones Lambda que gestionan diferentes aspectos de las transferencias bancarias y los destinatarios. Estas funciones interactúan con tablas DynamoDB para almacenar y recuperar datos. Todo es expuesto a través de API Gateway para permitir el acceso mediante peticiones HTTP.

## Logros y Desafíos
### Logros
1. Despliegue exitoso de una aplicación serverless en AWS.
2. Configuración correcta de políticas de seguridad para permitir la interacción entre servicios.

### Desafíos
1. Asegurar que las políticas IAM estuvieran correctamente configuradas para permitir las acciones necesarias en DynamoDB.
2. Aprender a usar el Serverless Framework y sus integraciones con AWS.
