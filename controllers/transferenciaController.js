// Importamos las bibliotecas necesarias
const AWS = require('aws-sdk');
const uuid = require('uuid'); 
const dynamoDB = require('../config/dynamodbConfig');

// Función para crear una transferencia
module.exports.createTransferencia = async (event) => {
  try {
    // Convertimos el cuerpo del evento a un objeto JSON
    const requestBody = JSON.parse(event.body);
    const { rut, name, bank, account_type, amount } = requestBody;

    // Definimos los parámetros para insertar en DynamoDB
    const params = {
      TableName: 'Transferencias', 
      Item: {
        'id': uuid.v1(),
        rut,
        name,
        bank,
        account_type,
        amount,
      },
    };

    // Insertamos el item en DynamoDB
    await dynamoDB.put(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Transferencia realizada con éxito',
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

// Función para obtener todas las transferencias realizadas
module.exports.getAllTransfers = async () => {
  try {
    const params = {
      TableName: 'Transferencias',
    };

    // Escaneamos la tabla para obtener todos los ítems
    const scanResults = await dynamoDB.scan(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(scanResults.Items),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }
};
