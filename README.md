# Task Management API

## Description

This project is a RESTful API for managing tasks. It's built with TypeScript, Express.js, and TypeORM, providing a robust backend for task creation, retrieval, updating, and deletion.

## Architecture
![image](https://github.com/user-attachments/assets/e10f3b25-115e-4628-b19e-61fe3c9c9386)


## Table of Contents

- [Installation Local](#installation-on-local-machine)
- [Installation Docker](#installation-on-docker)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database](#database)
- [Testing](#testing)
- [Documentation](#documentation)

## Installation on local machine

To get this project up and running on your local machine, follow these steps:

1. Clone the repository:

`git clone https://github.com/tenondecrpc/tt-nk-code-challenge.git`

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

`npm run start:dev`

## Installation on docker

This project uses Docker Compose to orchestrate and run multiple services in containers. Follow these steps to set up and run the environment on your Linux machine.

### Prerequisites

- **Docker**: Make sure Docker is installed. You can install it by following the official instructions at [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/).
- **Docker Compose**: Ensure that the Docker Compose version is compatible with your Docker version. Docker Compose is generally included with Docker Desktop, but you can install it manually on Linux. Installation instructions here: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/).

### Steps to Run `docker-compose.yml`

1. **Clone the repository** (if you haven’t already):
   ```bash
   git clone https://github.com/tenondecrpc/tt-nk-code-challenge.git
   cd tt-nk-code-challenge
   ```
2. **Start the services with Docker Compose:**:
  ```bash
  docker-compose up
  ```
3. **Check if containers are running:**:
  ```bash
  docker-compose ps
  ```
4. **Stop the services:**:
  ```bash
  docker-compose down
  ```

- **Note:**: If you are on mac, replace `docker-compose` by `docker compose`

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
To view the documentation page, use the following link:

[https://app.swaggerhub.com/apis/tenondecrpc/tt-nk-task-api/0.0.1](https://app.swaggerhub.com/apis/tenondecrpc/tt-nk-task-api/0.0.1)
