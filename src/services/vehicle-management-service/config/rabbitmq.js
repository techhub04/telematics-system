const amqp = require('amqplib');

const connectRabbitMQ = async ()=>{
    const connection = await amqp.connect("amqp://localhost");    
    var channel = connection.createChannel();
    console.log("RabbitMQ connected");
    return channel;
};

module.exports = connectRabbitMQ;
