# Tech Blog

## Description

The Tech Blog is a CMS-style blog site similar to WordPress, designed for developers to publish articles, blog posts, and share thoughts and opinions on technical topics. This application follows the Model-View-Controller (MVC) architectural pattern and uses Handlebars.js for templating, Sequelize as the ORM for the PostgreSQL database, and express-session for authentication.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

To run this application locally, please follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/tech-blog.git

2. Navigate to the Project Folder
```bash
cd tech-blog
```

3. Install dependencies
```bash
npm install
```

4. Set up environment variables: Create a .env file in the root directory and configure it as follows:
```bash
DB_NAME=tech_blog_db
DB_USER=yourDatabaseUsername
DB_PASSWORD=yourDatabasePassword
SESSION_SECRET=yourSecretKey
```

5. Initialize the database: Log in to your PostgreSQL and create the database.
```sql
CREATE DATABASE tech_blog_db;
```

6. Start Application:
```bash
npm start
```

The server will run on http://localhost:3000

Usage
Access the application by navigating to http://localhost:3000 in your browser.
Sign up for an account if you are a new user, or log in if you already have an account.
Create, edit, and delete blog posts from your dashboard.
View posts from other developers on the homepage and add comments.
Logout when you are finished.
Features
User authentication with login and signup.
Create, edit, and delete posts.
Comment on posts.
Dashboard for managing user-specific posts.
Session persistence with automatic logout after idle time.
Screenshots
Homepage

Dashboard

Login and Signup

Replace the links with your actual screenshot links if hosted, or include local image files.

Deployment
The application is deployed on Render and can be accessed at: Deployed Application Link

GitHub Repository: https://github.com/your-username/tech-blog

Technologies Used
Node.js: JavaScript runtime environment.
Express.js: Web framework for Node.js.
Sequelize: ORM for managing the PostgreSQL database.
PostgreSQL: Relational database for storing user and post data.
Handlebars.js: Templating engine for rendering HTML.
bcrypt: Library for password hashing.
express-session: Middleware for handling user sessions.
connect-session-sequelize: Sequelize session store for Express.


### Instructions for Final Steps

1. Replace `your-username` and `your-app-on-render.com` with your actual GitHub username and Render URL.
2. Add screenshots for the application if available. Place them in a `screenshots` folder within the project and update the paths in the `Screenshots` section.
3. Save the file and push it to your GitHub repository:
   ```bash
   git add README.md
   git commit -m "Add README with project details"
   git push origin main
