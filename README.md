# Task Management API

## Description

This project is a RESTful API for managing tasks. It's built with TypeScript, Express.js, and TypeORM, providing a robust backend for task creation, retrieval, updating, and deletion.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database](#database)
- [Testing](#testing)
- [Documentation](#documentation)

## Installation

To get this project up and running on your local machine, follow these steps:

1. Clone the repository:
git clone https://github.com/tenondecrpc/tt-nk-code-challenge.git

2. Navigate to the project directory:

    `cd tt-nk-code-challenge`

3. Install dependencies:
npm install


4. Set up your environment variables:
Create a `.env` file in the root directory and add the following:
```
HOST_PORT=3000
DB_TYPE=sqlite
DB_NAME=task
DB_EXTENSION=.sqlite
```

5. Start the server:
npm start

## Usage

Once the server is running, you can interact with the API using HTTP requests. The API will be available at `http://localhost:3000` by default.

## API Endpoints

- `GET /tasks`: Retrieve all tasks
- `POST /tasks`: Create a new task
- `PUT /tasks/:id`: Update an existing task
- `DELETE /tasks/:id`: Delete a task

### Request Body Format

For POST and PUT requests, use the following JSON format:

```json
{
  "title": "Task title",
  "completed": false
}
```
## Database
This project uses TypeORM with a SQL database. The Task entity is defined with the following properties:

```
id: number (auto-generated)

title: string

completed: boolean

```

Make sure your database is set up and the connection details are correctly specified in the .env file.

## Testing
To run the test suite, use the following command:

`npm run test`

## Documentation
Tu run the documentation page, use the following link:

`http://localhost:3000/api-docs/`