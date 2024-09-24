<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov


Microservices Demo with Node.js and NestJS
Project Overview
This project demonstrates a microservice architecture using NestJS (a progressive Node.js framework). It implements three microservices:

User Microservice: Manages user data (Create, Read, Update, Delete - CRUD operations).
Product Microservice: Manages product data (CRUD operations).
Order Microservice: Manages orders, which interact with both User and Product services.
Each microservice communicates with the gateway via TCP transport. The gateway exposes RESTful APIs to external clients, and it forwards the requests to the respective microservice.

Tech Stack
Node.js: Runtime environment for building server-side applications.
NestJS: Framework built on top of Node.js for creating efficient, scalable applications.
TypeScript: Superset of JavaScript, providing static typing.
TCP: Transport protocol for microservice-to-microservice communication.
Microservice Architecture
The project is structured as follows:

Gateway: Acts as a reverse proxy that routes HTTP requests to the respective microservices.
User Microservice: Handles user management (e.g., creating, retrieving, updating, and deleting users).
Product Microservice: Manages products in the system (e.g., creating, retrieving, updating, and deleting products).
Order Microservice: Handles order creation and management, including linking users and products.
Each microservice runs independently and communicates with the gateway using TCP.

Project Structure
The project is divided into four main directories:

bash
Copy code
/ecommerce-microservices/
    ├── /gateway/
    ├── /user-service/
    ├── /product-service/
    ├── /order-service/
Microservices
Each microservice follows a similar structure:

/src/controller: Handles incoming requests or messages.
/src/service: Contains the business logic.
/src/main.ts: Bootstraps the microservice.

# Features
Gateway API: Exposes RESTful endpoints to handle external requests.
User Microservice: Provides endpoints for CRUD operations on users.
Product Microservice: Provides endpoints for CRUD operations on products.
Order Microservice: Provides endpoints for CRUD operations on orders.
TCP Communication: The microservices communicate with the gateway via TCP transport for better scalability and resilience.

Example API Endpoints
User Microservice:

POST /users: Create a new user.
GET /users: Retrieve all users.
GET /users/:id: Retrieve a user by ID.
PUT /users/:id: Update a user by ID.
DELETE /users/:id: Delete a user by ID.
Product Microservice:

POST /products: Create a new product.
GET /products: Retrieve all products.
GET /products/:id: Retrieve a product by ID.
PUT /products/:id: Update a product by ID.
DELETE /products/:id: Delete a product by ID.
Order Microservice:

POST /orders: Create a new order.
GET /orders: Retrieve all orders.
GET /orders/:id: Retrieve an order by ID.
PUT /orders/:id: Update an order by ID.
DELETE /orders/:id: Delete an order by ID
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
