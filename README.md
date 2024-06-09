# The Wizarding Blog 

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description
The Wizarding Blog is a CMS-style tech blog site where developers can publish blog posts and comment on other posts. This application uses Handlebars.js as the templating language, Sequelize as the ORM, and express-session for authentication. It also features a rich text editor for creating and editing posts, ensuring an engaging user experience.

* **Motivation:** Developed to demonstrate proficiency in building a full-stack web application with user authentication and CRUD operations.
* **Purpose:** To provide a platform for developers to share knowledge and insights through blog posts.
* **Problem It Solves:** Simplifies the process of creating, editing, and viewing blog posts in a structured and organized manner.
* **What I Learned:** This project enhanced my skills in full-stack development, user authentication, and implementing rich text editors.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Deployment](#deployment)
- [License](#license)
- [Questions](#questions)

## Features

- **User Authentication:** Secure signup and login functionality.
- **Rich Text Editor:** Create and edit blog posts using a rich text editor.
- **Dashboard:** View and manage your blog posts.
- **Commenting:** Leave comments on blog posts.
- **Session Timeout:** Automatic logout after a period of inactivity.
- **Responsive Design:** Ensures a great experience on all devices.

## Technology Stack

- **Node.js:** For server-side runtime environment.
- **Express.js:** For server-side logic and API routes.
- **Sequelize:** For database management and schema definition with MySQL.
- **Handlebars.js:** For templating.
- **Quill.js:** For rich text editing.

## Installation 
To get started with The Wizarding Blog:

1. Ensure Node.js and MySQL are installed on your machine.
2. Clone the repository to your local machine: `git clone https://github.com/ktotah/the-wizarding-blog.git`.
3. Navigate to the project directory in your terminal.
4. Install the necessary dependencies by running: `npm install`.
5. Create a `.env` file in the root directory and add your MySQL credentials:
``` bash
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=wizarding_blog
```
Make sure to replace `yourpassword` with your actual MySQL password.
6. Run the schema and seeds files to set up the database:
``` bash
 mysql -u root -p < db/schema.sql
 mysql -u root -p < db/seeds.sql
```
7. Start the server by running: `npm start`.

## Usage 
Launch the application by navigating to `http://localhost:3001` in your web browser. Sign up for an account or log in to create, edit, and delete blog posts. You can also view posts and leave comments.

## Contributing

Your contributions are what make the community incredible. If you have an idea for improving this project, please fork the repository and create a pull request, or open an issue with your suggestions. For substantial changes, please open an issue first to discuss what you would like to change.

## Deployment

This application is deployed on [Heroku](https://heroku.com/). You can access it at the link [here](https://DEPLOYEDLINK.herokuapp.com/).

<br>
Screenshot of the application:

![Screenshot of the The Wizarding Blog, showcasing the main landing page.](/public/images/blog-screenshot.png)

## License
![License](https://img.shields.io/badge/License-MIT-blue.svg)

This project is licensed under the [MIT License](./LICENSE).

## Questions
For any questions, please contact me with the information below.

* GitHub: [ktotah](https://github.com/ktotah)
* Email: [ket2137@columbia.edu](mailto:ket2137@columbia.edu)

