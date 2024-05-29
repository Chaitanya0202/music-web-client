# Music Metadata Extraction Application

This project is a full-stack application that allows users to upload a music file, extract metadata such as filename, artist, album, year, etc., and view the data on the front end. The front end is built with React and styled using Tailwind CSS, while the back end is powered by Spring Boot.

## Table of Contents

- [Music Metadata Extraction Application](#music-metadata-extraction-application)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Front End](#front-end)
    - [Installation](#installation)
    - [Available Scripts](#available-scripts)
    - [Project Structure](#project-structure)
    - [Technologies Used](#technologies-used)
  - [Back End](#back-end)
    - [Installation](#installation-1)
    - [Project Structure](#project-structure-1)
    - [Endpoints](#endpoints)
    - [Configuration](#configuration)
    - [Testing](#testing)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Getting Started

To get a local copy up and running, follow these steps.

## Front End

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/Chaitanya0202/music-web-client
    ```
2. **Navigate to the front end directory:**
    ```sh
    cd Chaitanya0202/tail-mui
    ```
3. **Install dependencies:**
    ```sh
    npm install
    ```
4. **Start the development server:**
    ```sh
    npm start
    ```

### Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.
- `npm run eject`: Ejects the configuration files.
- `npm run lint`: Runs the linter.
- `npm run format`: Formats the code using Prettier.

### Project Structure

- **src/**
  - **components/**: Reusable React components.
  - **pages/**: Application pages.
  - **services/**: API calls and service functions.
  - **styles/**: Tailwind CSS styles.
  - **App.js**: Main application component.
  - **index.js**: Entry point of the application.

### Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- -** Material UI :Utility-first CSS framework for styling.
- **Axios**: Promise-based HTTP client for the browser.
- **Jest**: JavaScript testing framework.
- music-player-frontend/
├── public/

├── src/

│   ├── components/

│   ├── redux/

│   ├── App.js

│   ├── index.js

├── package.json

└── README.md


## Back End

### Installation
## https://github.com/Chaitanya0202/music-player-server
cd music-player-backend

1. **Navigate to the back end directory:**
    ```sh
    cd your-repo/backend
    ```
2. **Build the project using Maven:**
    ```sh
    ./mvnw clean install
    ```
3. **Run the application:**
    ```sh
    ./mvnw spring-boot:run
    ```

### Project Structure

- **src/main/java/com/yourusername/yourproject/**:
  - **controller/**: REST controllers handling HTTP requests.
  - **service/**: Business logic and services.
  - **dao/**: Data access objects (repositories).
  - **dto/**: Data Transfer Objects.
  - **repository/**: Interfaces for database operations.
  - **YourApplication.java**: Main Spring Boot application class.
- **src/main/resources/**:
  - **application.properties**: Configuration properties.
- **pom.xml**: Project Object Model file for Maven dependencies.

### Endpoints

- `POST /api/music/upload`: Uploads a music file and extracts metadata.
- `GET /api/music/{id}`: Retrieves metadata of a music file by ID.

### Configuration

Edit the `application.properties` file for database and server configuration.

```properties
server.port=8080
spring.datasource.url=jdbc:mysql://localhost:3306/yourdb
spring.datasource.username=root
spring.datasource.password=yourpassword
music-player-backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   ├── com/
│   │   │   │   ├── yourusername/
│   │   │   │   │   ├── controller/
│   │   │   │   │   ├── service/
│   │   │   │   │   ├── dao/
│   │   │   │   │   ├── dto/
│   │   │   │   │   ├── repository/
│   │   │   │   │   └── YourApplication.java
│   │   ├── resources/
│   │   │   └── application.properties
│   └── test/
├── target/
├── pom.xml
└── README.md


