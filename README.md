# NestJS with Passport and JWT

[![NestJS](https://nestjs.com/img/logo_text.svg)](https://nestjs.com/)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE)

A simple authentication system using NestJS, Passport, and JWT (JSON Web Tokens).

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Routes](#routes)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a starter template for building a secure authentication system using NestJS, Passport (with JWT strategy), and JSON Web Tokens. NestJS is a progressive Node.js framework for building efficient and scalable server-side applications.

## Features

- User registration with hashed passwords.
- User login with JWT generation and validation.
- Authentication middleware to protect routes.
- JWT expiration and token refreshing mechanism.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/nest-js-with-passport-jwt.git
```

2. Install the dependencies:

```bash
cd nest-js-with-passport-jwt
npm install
```

## Configuration

Before running the application, you need to set up the environment variables. Rename the `.env.example` file to `.env` and modify the following variables to suit your configuration:

```
# Set your own secret for JWT generation
JWT_SECRET=mySecretKey

# Define JWT expiration time (e.g., 1h, 7d, 30d)
JWT_EXPIRATION=1h
```

## Usage

To start the development server, use the following command:

```bash
npm run start:dev
```

The application will be accessible at `http://localhost:3000`.

## Routes

The following routes are available in the application:

- **POST /auth/register**: Register a new user. Provide `username` and `password` in the request body.

- **POST /auth/login**: Log in as a registered user. Provide `username` and `password` in the request body. If successful, this will return a JWT access token.

- **GET /profile**: A protected route that requires a valid JWT access token. Use this route to fetch the user's profile information.

- **POST /auth/refresh**: Refresh the JWT access token by providing the expired token in the request body. If the token is valid and the user is still authenticated, a new JWT access token will be generated and returned.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy coding! If you have any questions or need further assistance, feel free to contact me.

*Note: Replace `JayCabasag` in the GitHub repository URL with your actual GitHub username.*
