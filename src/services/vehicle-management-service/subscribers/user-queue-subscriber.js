const queue = "new-user-queue";
const userService = require("../services/user-service");

const userQueueSubscriber = async (channel) => {
  try {
    await channel.assertQueue(queue, { durable: true });

    channel.consume(queue, (message) => {
      const buffer = message.content;
      const jsonString = buffer.toString("utf8");
      userService.createUser(jsonString);
      console.log(message);
      channel.ack(message);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = userQueueSubscriber;
