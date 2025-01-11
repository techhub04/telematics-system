module.exports = {
  vhosts: {
    v1: {
      // Virtual host (default is "/")
      connection: {
        slashes: true,
        protocol: "amqp",
        hostname: "localhost",
        user: "guest",
        password: "guest",
        port: 5672,
        vhost: "v1",
        options: {
          heartbeat: 5,
        },
        socketOptions: {
          timeout: 10000,
        },
        retry: {
          min: 1000,
          max: 60000,
          factor: 2,
          strategy: "exponential",
        },
      },
      exchanges: {
        user_exchange: {
          type: "topic", // Exchange type (direct, fanout, topic, headers)
          options: {
            durable: true, // Whether the exchange survives RabbitMQ restarts
          },
        },
      },
      queues: {
        user_queue: {
          options: {
            durable: true, // Whether the queue survives RabbitMQ restarts
          },
        },
      },
      bindings: {
        user_binding: {
          source: "user_exchange", // Exchange name
          destination: "user_queue", // Queue name
          destinationType: "queue",
          bindingKey: "#", // Routing key
        },
      },
      publications: {
        user_publication: {
          exchange: "user_exchange",
          routingKey: "#",
          options: {
            persistent: true, // Messages persist if RabbitMQ restarts
          },
        },
      },
      subscriptions: {
        user_subscription: {
          queue: "user_queue",
          prefetch: 10, // Number of messages to prefetch
          options: {
            noAck: false, // Messages require acknowledgment
          },
        },
      },
    },
  },
};
