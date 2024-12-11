# Quiz Application

This project is a backend application for a quiz platform, allowing users to register, log in, and answer questions in a quiz format. The backend is implemented with Node.js, MongoDB,  and it includes user authentication, token management.

User-friendly Interface: Easy-to-navigate quiz format.
Timed Questions: Option to add time limits to questions.
Score Calculation: Automatically calculates and displays the score upon quiz completion.
### Project Structure

- routes: Contains application routes.
- controllers: Contains logic for handling quiz data.
- models: Defines data structure (if using a database).
- middleware: Middleware functions for request processing.
- config: Contains utility functions and configurations for the project.

### Features

- User Authentication: Allows users to sign in, and admins can also log in with specific privileges.
- Token Management: Uses JSON Web Tokens (JWT) for user authentication and Redis for session management.
- Quiz Functionality: CRUD operations for questions and answers, with role-based access (admin, user).
- Data Storage: MongoDB for storing user and quiz data, Redis for caching session tokens.

### Technologies

- Backend: Node.js, Express
- Database: MongoDB (Mongoose)
- Token Management: JSON Web Tokens (JWT)
- Logging: Custom logging using Winston
- Encrypt/Decrypt using crypto-js

### Prerequisites

Node.js: Ensure you have Node.js installed. You can download it here.
npm: Node Package Manager is required to install dependencies.

### Installation

Clone the repository:

```git clone https://github.com/manupanand/project-quiz-app.git

cd project-quiz-app
```

### Install dependencies:

```
npm install
```
### Set up environment variables:
 Create a .env file in the root directory and configure the following:

``` 
-MONGO_ATLAS="mongodb://localhost:27017/testdb"
-MONGO_ATLAS= your mongo atlas url
-ENCRYPT_SECRET_KEY=
-JWT_SECRET_KEY=
```


### Running the Application

To start the server, run:

``` 
npm run server

```

## Docker build
```
sudo docker build -t quiz-app .

```

## Run docker image

```
    sudo docker run -p 2500:2500 quiz-app
    
```

This will launch the application at http://localhost:2500 by default.

Usage
API Endpoints

    User Authentication:
        POST /user/signin - Sign in as a regular user
        POST /admin/signin -Sign in as a regular  admin.
        POST /admin/signup - Sign up as a new admin.
        POST /user/signup -Signup in as a regular user
    Quiz Management:
        GET /user/question/all - Get all questions (user-admin).
        GET /admin/question/all - Get all questions (admin-admin).
        POST /questions - Add a new question (admin-only).
        DELETE /questions/ - Delete a question by body (admin-only).
    Answering Quiz:
        POST /user/answer/submit - Submit answers for a quiz.

## Contributions

Feel free to fork this repository and submit pull requests. For major changes, please open an issue to discuss what you'd like to change.

## License

This project is licensed under the GPL-3.0 License.
