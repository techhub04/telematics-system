 const amqp = require('amqplib');
 const RABBITMQ_URL = 'amqp://localhost';
//const Rascal = require('rascal');
//const config = require('./rascal-config');
const USER_QUEUE = "new-user-queue";

const sendMessage = async(message)=>{
    try {
        // message = JSON.stringify(message);
        // const decoratedConfig = Rascal.withDefaultConfig(config);
        // const broker = await Rascal.Broker.create(decoratedConfig);

        // broker.publish("user_publication",message,(err,publication)=>{
        //     if (err) {
        //         console.error("Failed to publish message", err);
        //         return;
        //       }
        //       console.log("Message published:", message);            
        // });
        // await broker.shutdown();

        message = JSON.stringify(message);
        const connection = await amqp.connect(RABBITMQ_URL);
        const channel = await connection.createChannel();
        await channel.assertQueue(USER_QUEUE, {durable:true});
        channel.sendToQueue(USER_QUEUE, Buffer.from(message));
        console.log(`Message sent: ${message}`);
        await channel.close();
        await connection.close();
    } catch (error) {
        console.error('Error sending message:', error);
    }
}

module.exports = sendMessage;