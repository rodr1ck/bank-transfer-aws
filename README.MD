# Proyecto Final AWS: Sistema de Transferencia Bancaria

## Descripción
Este proyecto consiste en una aplicación backend desarrollada en Node.js, diseñada para gestionar transferencias bancarias y destinatarios. Está alojada en la nube a través de AWS, aunque también ofrece la posibilidad de ejecutarse localmente.

## Funcionalidades
- **Creación de Destinatarios**: Permite registrar destinatarios con detalles como RUT, nombre, email, teléfono, entre otros.
- **Consulta de Destinatarios**: Posibilita la búsqueda de un destinatario específico mediante su RUT.
- **Realización de Transferencias**: Facilita la ejecución de transferencias bancarias, especificando diversos detalles relacionados con la transacción.
- **Visualización de Transferencias**: Ofrece un listado completo de todas las transferencias efectuadas.

## Ejecución en Local

### Pre-requisitos
- Instalación de DynamoDB localmente.
- Java debe estar instalado y configurado correctamente en el `PATH` del sistema.

### Pasos
1. Agregar `endpoint: "http://localhost:8000"` en `AWS.config.update`.
2. Iniciar DynamoDB localmente:
```
$ java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
```

### Validación
Tras iniciar DynamoDB, debería aparecer el siguiente mensaje:
```
Initializing DynamoDB Local with the following configuration:
Port:   8000
InMemory:       false
DbPath: null
SharedDb:       true
shouldDelayTransientStatuses:   false
CorsParams:     null
```


## Despliegue en AWS
1. **Serverless Framework**: Utilizado para facilitar el despliegue de funciones Lambda y la configuración del API Gateway en AWS.
2. **DynamoDB**: Seleccionado por su escalabilidad e integración con AWS Lambda.
3. **IAM**: Se establecieron roles y políticas para garantizar una correcta interacción entre las funciones Lambda y DynamoDB.
4. **API Gateway**: Configurado para exponer las funciones Lambda a través de endpoints HTTP.

## Arquitectura
El sistema integra diversas funciones Lambda encargadas de las transferencias bancarias y gestión de destinatarios. Estas interactúan con DynamoDB para el almacenamiento y consulta de datos, y todo es accesible mediante API Gateway.

## Configuración Inicial y Despliegue

1. **Clonar el repositorio**:
```
git clone https://github.com/rodr1ck/bank-transfer-aws.git
```
2. **Instalación de dependencias**:
```
npm i
```
3. **Despliegue local (tras configurar DynamoDB localmente)**:
```
sls offline
```
4. **Despliegue en AWS (asegúrate de configurar previamente el usuario AWS)**:
```
sls deploy
```

### Healthcheck
Para validar la correcta ejecución del sistema, visita [este enlace](http://localhost:3000/dev/healthcheck). Deberías recibir el mensaje: "Server is ok".

### Llamada Healthcheck
![Llamada Healthcheck](https://github.com/rodr1ck/bank-transfer-aws/assets/29648679/a55291c3-312f-4ed8-9222-86b3d85bb2c1)

## URL del Backend Desplegado
### Llamada Healthcheck
![Crea Destinatario](https://github.com/rodr1ck/bank-transfer-aws/assets/29648679/4b3809d8-30cc-4d7a-8543-6bde13dd2877)
![Get Destinatario](https://github.com/rodr1ck/bank-transfer-aws/assets/29648679/fb2484d7-eea6-4611-9f4d-98387e82d47e)
![Crea Transferencia](https://github.com/rodr1ck/bank-transfer-aws/assets/29648679/16c602e4-a0a6-4fcd-a028-a2c43115c870)
![Get All Transferencias](https://github.com/rodr1ck/bank-transfer-aws/assets/29648679/19c546f4-c834-45ea-8485-9638ac072201)

## Reflexiones
### Logros
- Despliegue exitoso en un entorno serverless de AWS.
- Gestión adecuada de las políticas de seguridad entre servicios.

### Desafíos
- Configuración de políticas IAM.
- Adaptación al Serverless Framework y su ecosistema en AWS.


