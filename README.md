# Todo Application

## **Objective**
Build a simple API to manage a Todo application. The API should allow users to manage tasks with basic CRUD operations. You'll practice implementing models, controllers, validations, and handling RESTful API design.

### **Requirements**
#### **Entities**

* A Todo model with the following attributes:
  * `title` (string, required, max length: 100 characters)
  * `description` (text, optional)
  * `status` (enum, required; possible values: pending, in_progress, completed, default: pending)
  * `due_date` (datetime, optional)
  * `created_at` and `updated_at` (managed by Rails)

#### **Endpoints**

* **GET** `/todos`: Retrieve a list of all todos.
* **POST** `/todos`: Create a new todo.
* **GET** `/todos/:id`: Retrieve a single todo by its ID.
* **PATCH** `/todos/:id`: Update a todo’s attributes.
* **DELETE** `/todos/:id`: Delete a todo by its ID.


#### **Validation**

* The `title` should be present and not exceed 100 characters.
* The `due_date` must be in the future, if provided.


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
