// Importamos las bibliotecas necesarias
const AWS = require('aws-sdk');
const uuid = require('uuid'); 
const dynamoDB = require('../config/dynamodbConfig');

// Función para crear un destinatario
module.exports.createDestinatario = async (event) => {
  try {
    // Convertimos el cuerpo del evento a un objeto JSON
    const requestBody = JSON.parse(event.body);
    const { rut, name, email, phone, bank, account_type, account_number } = requestBody;

    // Definimos los parámetros para insertar en DynamoDB
    const params = {
      TableName: 'Destinatarios', // nombre de la tabla en DynamoDB
      Item: {
        'id': uuid.v1(),
        rut,
        name,
        email,
        phone,
        bank,
        account_type,
        account_number,
      },
    };

    // Insertamos el item en DynamoDB
    await dynamoDB.put(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Destinatario creado exitosamente',
        itemId: params.Item.id,
      }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
};

// Función para obtener un destinatario por RUT
module.exports.getDestinatario = async (event) => {
  try {
    // Extraemos el RUT desde los parámetros del evento
    const rut = event.pathParameters.rut;
    const params = {
      TableName: 'Destinatarios',
      Key: { "rut": rut }
    };

    // Realizamos la consulta en DynamoDB
    const result = await dynamoDB.get(params).promise();

    if (!result.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Destinatario no encontrado" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
};
