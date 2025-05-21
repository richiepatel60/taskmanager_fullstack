# Task Manager - Fullstack Application (Node.js + React + MySQL)

## Project Summary

This is a fullstack Task Manager application designed primarily to showcase **backend development skills using Node.js and Express.js**, coupled with a MySQL relational database. The backend forms the core of the system, handling RESTful API endpoints for task CRUD (Create, Read, Update, Delete) operations, data validation, error handling, and business logic implementation. The Node.js backend serves as the backbone for managing tasks, including status tracking, timestamps, and input validation to ensure data integrity and a smooth user experience.

The frontend is built with React and uses Bootstrap for UI styling. It provides a clean, intuitive interface for users to interact with the task data — allowing them to add, edit, delete, and group tasks by status. While the frontend is functional and user-friendly, it primarily serves as a display layer and interface for the backend API.

This project is an excellent demonstration of practical backend skills in Node.js, API design, SQL database management, and integration with a modern frontend framework. It is suitable for candidates applying for Node.js developer or fullstack roles with a focus on backend expertise.

---

## Features

- Full CRUD operations on tasks via RESTful API endpoints
- Tasks include **title, description, status (pending/completed), created_at, and updated_at timestamps**
- Backend validation to ensure task titles are non-empty and within character limits
- Grouping of tasks by status, with completed tasks collapsible in the frontend
- Clean error handling with user-friendly messages propagated to the frontend
- React-based frontend with Bootstrap styling for a responsive UI
- Clear separation of concerns: backend handles logic and data management; frontend handles presentation and user interaction

---

## Tech Stack

| Layer          | Technology          | Purpose                                       |
| -------------- | ------------------- | ---------------------------------------------|
| Backend        | Node.js, Express.js | API endpoints, routing, validation, error handling |
| Database       | MySQL               | Persistent storage of tasks and metadata     |
| Frontend       | React, Bootstrap    | User interface, task display, and interaction|
| HTTP Client    | Axios / API service | Frontend communication with backend REST API |

## Installation

1. Clone the repo:  
   `git clone https://github.com/richiepatel60/taskmanager_fullstack.git`

2. Backend:  
   - Navigate to backend folder  
   - Run `npm install`  
   - Create `.env` with your MySQL credentials  
   - Run `npm start`

3. Frontend:  
   - Navigate to frontend folder  
   - Run `npm install`  
   - Run `npm start`

4. Open `http://localhost:3000` in your browser.

## Future Improvements
- Add authentication
- Improve UI design
- Add testing

---

Made by Richie Patel | [GitHub](https://github.com/richiepatel60)

---

## Detailed Component Overview

### Backend (Node.js + Express.js)

- **Server Setup (`server.js`)**  
  Initializes the Express server, configures middleware (JSON parsing, CORS), and connects to the MySQL database. Defines routes for the task APIs and handles global error handling.

- **Routes (`routes/taskRoutes.js`)**  
  Defines REST API endpoints:
  - `GET /tasks` — Retrieves all tasks from the database.
  - `POST /tasks` — Creates a new task, with validation on the task title and description.
  - `PUT /tasks/:id` — Updates an existing task by ID.
  - `DELETE /tasks/:id` — Deletes a task by ID.

- **Controllers (`controllers/taskController.js`)**  
  Contains the logic behind each endpoint:
  - Interacts with the MySQL database using queries.
  - Validates input to prevent invalid or incomplete data.
  - Adds automatic timestamps (`created_at`, `updated_at`) for each task.
  - Handles task status updates (pending/completed).
  - Sends appropriate HTTP responses with meaningful error messages when necessary.

- **Database Integration (`db.js` or config files)**  
  Sets up connection pooling to the MySQL database, manages queries, and ensures efficient handling of concurrent requests.

- **Input Validation & Error Handling**  
  Server-side validation is critical to prevent bad data entry. Titles are required and have character limits. Error responses follow REST best practices with HTTP status codes and error messages in JSON format, which the frontend can consume and display.

---

### Frontend (React + Bootstrap)

- **TaskList Component (`TaskList.js`)**  
  Fetches tasks from the backend API and displays them in a table format.  
  Tasks are grouped by status (pending on top, completed in a collapsible section).  
  Displays task title, description, status, and timestamps (created/updated) formatted to show hour and minute only.  
  Buttons allow editing and deleting tasks by communicating with backend APIs.

- **TaskForm Component (`TaskForm.js`)**  
  Provides a controlled form to add or edit tasks, sending data to backend via API calls. Includes input validation on the frontend to improve UX before backend validation.

- **App Component (`App.js`)**  
  Main container that manages state and renders TaskList and TaskForm components. Also responsible for page layout and any global UI elements.

- **UI Enhancements**  
  Uses Bootstrap for styling and layout to ensure responsiveness and clean design.  
  Features like color-coded status badges and collapsible sections for completed tasks enhance usability.

---
