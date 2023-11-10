# M-BOX React Application



M-BOX is a modern React application that provides a seamless user experience. It leverages popular technologies like React, React Router, Tailwind CSS, and more to create a feature-rich web application. This README provides a comprehensive guide to setting up, configuring, and running the M-BOX application.


# Features

M-BOX comes with the following key features:

- *Multi-Page Application:* Utilizes React Router to create a multi-page application with routes for the home page, about page, contact page, login page, signup page, and a dashboard.

- *Tailwind CSS Styling:* Tailwind CSS is used for styling, providing a highly customizable and responsive design.

- *ES6 JavaScript:* The project is written in ES6 JavaScript, and Babel is used for transpilation.

- *Linting with ESLint:* ESLint is configured to ensure code quality and consistency in the project.

- *Vite for Development:* Vite is used as a development server, bundler, and build tool, providing a fast and efficient development experience.

- *External Libraries:* The project uses various external libraries, including Redux Toolkit for state management, Axios for HTTP requests, Formik for form handling, SweetAlert2 for notifications, and more.

# Prerequisites

Before you begin, ensure you have met the following requirements:

- *Node.js and npm:* Make sure Node.js and npm are installed on your machine. You can download and install them from [nodejs.org](https://nodejs.org/).

- *Python:* The project specifies Python 3.10 as a requirement, so ensure you have Python 3.10 installed on your system.

- *Internet Connection:* You need an internet connection to download and install project dependencies.

## Getting Started

Follow these steps to get the M-BOX application up and running on your local machine:

1. *Clone the Project:*
   
   bash
   git clone  https://github.com/Helder-Lucau/Moringa-Box-Client/tree/development
  cd m-box
   

2. *Install Dependencies:*
   
   Run the following command to install the project's dependencies:

   bash
   npm install
   

3. *Start the Development Server:*

   To start the development server, run:

   bash
   npm run dev
   

4. *Access the Application:*

   Open your web browser and navigate to `http://localhost:3000` to access the M-BOX application.

## Project Structure

The project structure is organized as follows:

- `src/`: Contains the source code for the React application.
- `tailwind.config.js`: Configuration file for Tailwind CSS.
- `.eslintrc.cjs`: ESLint configuration for code linting.
- `vite.config.js`: Vite configuration for development and builds.
- `pyproject.toml`: Python configuration for the project (requires Python 3.10).

## Available Scripts

- `npm run build`: Build the project for production, creating an optimized bundle in the `dist/` directory.

- `npm run lint`: Run ESLint to analyze and check the code quality. The command will report any issues that need to be addressed.

- `npm run preview`: Preview the production build locally for testing before deploying it to a web server.

- `npm run start`: Start a production server to serve the application from the `dist/` directory.

## Configurations

The project includes several configuration files:

- `tailwind.config.js`: This file contains the configuration for Tailwind CSS, allowing you to customize the styling of the application.

- `.eslintrc.cjs`: The ESLint configuration file is used to enforce coding standards and best practices.

- `vite.config.js`: The Vite configuration file sets up the development server and build options for the project.

- `pyproject.toml`: The Python project configuration file specifying Python 3.10 as the required version.

## Contributing

Contributions to M-BOX are welcome! If you want to contribute, please follow these guidelines:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Create a pull request to the main repository.

## License

M-BOX is open-source software distributed under the MIT License. See the [LICENSE](LICENSE) file for details.