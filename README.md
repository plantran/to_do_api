# Todo Application

## **1. Objective**

### Preamble
This repository is an exercise that I made to practice Ruby on Rails as an API only application. The `api` part is the main focus of this exercise. I took the opportunity to learn the basics of React to build a simple front-end application to consume the API.

### Task
Build a simple API to manage a Todo application. The API should allow users to manage tasks with basic CRUD operations. You'll practice implementing models, controllers, validations, and handling RESTful API design.

### **Requirements**
#### **Entities**

* A Todo model with the following attributes:
  * `title` (string, required, max length: 100 characters)
  * `description` (text, optional)
  * `status` (enum, required; possible values: pending, in_progress, completed, default: pending)
  * `duedate` (datetime, optional)
  * `created_at` and `updated_at` (managed by Rails)

#### **Endpoints**

* **GET** `/todos`: Retrieve a list of all todos.
* **POST** `/todos`: Create a new todo.
* **GET** `/todos/:id`: Retrieve a single todo by its ID.
* **PATCH** `/todos/:id`: Update a todo’s attributes.
* **DELETE** `/todos/:id`: Delete a todo by its ID.


#### **Validation**

* The `title` should be present and not exceed 100 characters.
* The `duedate` must be in the future, if provided.


#### **Constraints**

* Return appropriate HTTP status codes (200, 201, 422, 404, etc.).
* Handle invalid requests gracefully and return error messages in JSON format.
* Allow filtering of todos by status using a query parameter (e.g., GET /todos?status=pending).


#### **Data Handling**

* Use a database
* Seed the database with at least 5 example todos.

#### **Optional Enhancements**

* Add pagination to the **GET** `/todos` endpoint.
* Implement searching todos by title or description.
* Add authentication (e.g., a simple token-based system).

----

## 2. Setup and usage

### **Running on Docker**

* Clone the repository
* At the root of the repository, run `docker compose up --build`

### **Running locally**

* Clone the repository
* Go the `api` folder
  * Run `bundle install`
  * Create a user in postgres: `CREATE ROLE todouser WITH createdb login password 'todopassword';`
  * Create a `.env` file and add the following line: `API_TOKEN=Foobar42`
  * Run `rails db:setup`
  * Start the server with `rails s`
* Go to the `front` folder
  * Run `npm install`
  * Create an `.env` file and add the following line: `REACT_APP_API_SECRET="Foobar42"`
  * Run `PORT=3001 npm run dev`

You can access the application on `http://localhost:3001`.
