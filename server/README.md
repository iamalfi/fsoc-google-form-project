# Californium

Repository for backend cohort - Californium

## Fsoc project google-form

## Phase I

### Models

- User Model

```yaml
{
  username: { mandatory, string },
  email: { mandatory, valid email, string, unique },
  password: { mandatory, string },
}
```

- Form Model

```yaml
{
  title: { mandatory, string },
  description: { mandatory, string },
  formFields: { mandatory, Array },
  userId: { mandatory, ObjectId },
}
```

- Response Model

```yaml
{
  answers: { mandatory, Array },
  userId: { mandatory, ObjectId },
  formId: { mandatory, ObjectId },
}
```

### User APIs /user

- Create an user -
- Create a user document from request body.
  `Endpoint: BASE_URL/user`

  ### POST /register

- Create a user -
- Create a user document from request body.
- Return HTTP status 201 on a succesful user creation. Also return the user document. The response should be a JSON object like [this](#successful-response-structure)
- Return HTTP status 400 if no params or invalid params received in request body. The response should be a JSON object like [this](#error-response-structure)

### POST /login

- Allow an user to login with their email and password.
- On a successful login attempt return a JWT token contatining the userId. The response should be a JSON object like [this](#successful-response-structure)
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

## form API

### POST /form

- Create a form document from request body. Get userId in request body only.
- Make sure the userId is a valid userId by checking the user exist in the users collection.
- Return HTTP status 201 on a succesful form creation. Also return the form document. The response should be a JSON object like [this](#successful-response-structure)
- Return HTTP status 400 for an invalid request with a response body like [this](#error-response-structure)

## Response API

### POST /response-form

- Create a response document from request body. Get userId and formId in request body only.
- Make sure the userId and formId is a valid userId and formId by checking the user exist in the users collection.
- Return HTTP status 201 on a succesful response creation. Also return the response document. The response should be a JSON object like [this](#successful-response-structure)

- Return HTTP status 400 for an invalid request with a response body like [this](#error-response-structure)

### Authentication

- Make sure all the routes are protected accept register login.

## Response

### Successful Response structure

```yaml
{ status: true, message: 'Success', data: {} }
```

### Error Response structure

```yaml
{ status: false, message: '' }
```

## Collections

## users

```yaml
{
  _id: ObjectId("88abc190ef0288abc190ef02"),
  username: 'John Doe',
  email: 'johndoe@mailinator.com',
  password: 'abcd1234567',
  'createdAt': '2021-09-17T04:25:07.803Z',
  'updatedAt': '2021-09-17T04:25:07.803Z',
}
```

## forms

```yaml
 {
  _id: ObjectId("88abc190ef0288abc190ef02"),

title: "Untitled Form",
description: "Form Description",

formFields:[
{id
0
name: "0",
label: "what is your name?",
required: false,
question_type: "short_answer",
list: []},

{name: "question_1",
label: "what is your age",
required: false,
question_type: "multichoice",

list: ["20","22","23","none of the above"]
}],
userId: ObjectId('643d5e02042e2e98f43f68a0')
__v: 0,
  'createdAt': '2021-09-17T04:25:07.803Z',
  'updatedAt': '2021-09-17T04:25:07.803Z',

}
```

## Response

```yaml
 {
  _id: ObjectId("88abc190ef0288abc190ef02"),
  answers: [{
what is your name?: "Alfiya",
what is your age: "none of the above",
what is your favourite colour ?: "all sober colours"}],
userId: ObjectId('643d5e02042e2e98f43f68a0'),
formId: ObjectId('643d5e02042e2e98f43f68a0')
__v: 0,
  'createdAt': '2021-09-17T04:25:07.803Z',
  'updatedAt': '2021-09-17T04:25:07.803Z',
}
```

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
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
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
