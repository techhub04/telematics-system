#NodeJS Backend APIs by utilizing NodeJS Microservices Architecture

##GitCommands
To setup the userid and and email first time
Set Global Configuration: Run the following commands to set your username and email globally 
(applies to all repositories on your system): 
git config --global user.name "Your Full Name"
git config --global user.email "your.email@example.com"

##Verify Configuration: Check if the values were set correctly:
git config --global --list


## Devops Org
https://dev.azure.com/TSOrg/TSystems

## esbuild for bundeling and minified 
npm install --save-dev esbuild

## build the docker images
docker-compose build

## start the container
docker-compose up -d

## list the images
docker ps

## set .env 

## Rabbit MQ setup
1. donwload RabbitMQ from official website
2. Install amqplib for RabbitMQ interaction:
3. Install rascal for robust library for managing RabbitMQ interactions
4. npm install amqplib
Run the following command to enable the rabbitmq_management plugin:
rabbitmq-plugins enable rabbitmq_management

Rascal is a robust library for managing RabbitMQ interactions in Node.js. 
It simplifies working with RabbitMQ by providing features like error handling, retries, dead-letter queues, 
and more, while abstracting many low-level details.

## MS SQL SAETUP WITH PRISIMA ORM --https://chatgpt.com/c/678200ab-057c-8011-8c80-4bbd40f03ae8
npm install prisma --save-dev
npx prisma init

## Install Prisma Client and MS SQL Connector: 
