# Tech-Blog

A CMS-style ![blog site](https://tech-blog-mw.herokuapp.com/) where developers can publish their blog posts and comment on other developers' posts.

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## DESCRIPTION

A tech blog application where developers can create an account; view blog posts; create, update, and delete posts; comment on other devevlopers' posts; and read others' comments.

The application follows the MVC paradigm in its architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and the expres-session npm package for authentication.

## TABLE OF CONTENTS

- [DESCRIPTION](#description)
- [DEVELOPMENT CRITERIA](#development-criteria)
- [INSTALLATION](#installation)
- [USAGE](#usage)
- [LICENSE](#license)
- [CONTRIBUTING](#contributing)
- [TESTS](#tests)
- [TECHNOLOGIES USED](#technologies-used)
- [LINKS](#links)
- [QUESTIONS](#questions)

## DEVELOPMENT CRITERIA

The following acceptance criteria was used to guide the development of this project:

- [x] AS A developer who writes about tech
- [x] I WANT a CMS-style blog site
- [x] SO THAT I can publish articles, blog posts, and my thoughts and opinions

- [x] GIVEN a CMS-style blog site
- [x] WHEN I visit the site for the first time
- [x] THEN I am presented with the homepage, which includes existing blog psots if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
- [x] WHEN I click on the homepage option
- [x] THEN I am taken to the homepage
- [x] WHEN I click on any other links in the navigation
- [x] THEN I am prompted to either sign up or sign in
- [x] WHEN I choose to sign up
- [x] THEN I am prompted to create a username and password
- [x] WHEN I click on the sign-up button
- [x] THEN my user credentials are saved and I am logged into the site
- [x] WHEN I am signed in to the site
- [x] THEN I see navigation links for the homepage, the dashboard, and the option to log out
- [x] WHEN I click on the homepage option in the navigation
- [x] THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
- [x] WHEN I click on an existing blog post
- [x] THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
- [x] WHEN I enter a comment and click on the submit button while signed in
- [x] THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
- [x] WHEN I click on the dashboard option in the navigation
- [x] THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
- [x] WHEN I click on the button to add a new blog post
- [x] THEN I am prompted to enter both a title and contents for my blog post
- [x] WHEN I click on the button to create a new blog post
- [x] THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
- [x] WHEN I click on one of my existing posts in the dashboard
- [x] THEN I am able to delete or update my post and taken back to an updated dashboard
- [x] WHEN I click on the logout option in the navigation
- [x] THEN I am signed out of the site
- [x] WHEN I am idle on the site for more than a set time
- [x] THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

## INSTALLATION

1. Fork the [repository](https://github.com/merewall/Tech-Blog) from [GitHub](https://github.com/) to your profile.
2. Clone the repository down to your local machine in command-line using: `git clone`.
3. Node.js is required to run this application. Click [here](#installing-nodejs) for instructions on installing Node.js.
4. Install the required dependices to your cloned directory in command-line using: `npm install`

   - Or install the packages individually...
     - Install [express](https://www.npmjs.com/package/express) to your cloned directory in command-line using: `npm install express`.
     - Install [mysql2](https://www.npmjs.com/package/mysql2) to your cloned directory in command-line using: `npm install --save mysql2`
     - Install [dotenv](https://www.npmjs.com/package/dotenv) to your cloned directory in command-line using: `npm install dotenv`
     - Install [sequelize](https://www.npmjs.com/package/sequelize) to your cloned directory in command-line using: `npm install sequelize`
     - Install [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) to your cloned directory in command-line using: `npm install connect-session-sequelize`
     - Install [express-handlebars](https://www.npmjs.com/package/express-handlebars) to your cloned directory in command-line using: `npm install express-handlebars`
     - Install [express session](https://www.npmjs.com/package/express-session) to your cloned directory in command-line using: `npm install express-session`
     - Install [bcrypt](https://www.npmjs.com/package/bcrypt) to your cloned directory in command-line using: `npm install bcrypt`

   ###### Installing Nodejs

   1. Check if you already have Node.js in command-line by typing `node`.
   2. If you have Node.js on your machine, a message similar to `Welcome to Node.js` will appear.
   3. If you do not have Node.js, an error message will appear and you need to download it.
   4. To download Node.js, click [here](https://nodejs.org/en/download/).
   5. After download and installation is complete, restart your command-line terminal and redo step 1 to confirm a successful installation.
   6. After Node.js is on your local machine, return to the [installation](#installation) instructions for this project's application above.

## USAGE

_If cloned down to your computer..._

1. Add an .env file with your MySQL username, database name, and MySQL password.
2. Navigate to the directory of the application in your terminal using `cd`, if not already there.
3. If you haven't already, be sure you followed all [installation](#installation) instructions to install node, express, dotenv, express-handlebars, express-session, connect-session-sequelize, brcypt, sequelize and mysql2 dependencies.
4. Create your database by running the schema.sql file (right-clicking on the schema file and selecting Run MySQL Query).
5. Seed your database in CLI using: `npm run seed`.
6. Initialize the application in CLI using: `npm start`.
7. Go to https://localhost:3001 to visit application

_If accessing deployed Heroku application..._

1. View blog posts on homepage with creator's username and date created.
2. Click on a blog post to see the post and any comments on the post.
3. Logon or create an account to access your dashboard.
4. Create a blog post in your dashboard.
5. Click on any of your blog posts to be given the option to edit or delete your post.
6. Click on any blog post to add a comment.
7. Logout to end your session and close access to your dashboard.

_Homepage:_

![tech*nicality blog homepage](https://github.com/merewall/Tech-Blog/tree/main/public/images/homepage.PNG)

_Mobile Homepage:_
![tech*nicality blog homepage](https://github.com/merewall/Tech-Blog/tree/main/public/images/homepage-mobile.PNG)

_Login page:_

![log on page](https://github.com/merewall/Tech-Blog/tree/main/public/images/login.PNG)

_Create account page:_

![create account page](https://github.com/merewall/Tech-Blog/tree/main/public/images/signup.PNG)

_Individual post page with comments:_
_Post page when logged out:_
![logged out post page with comments](https://github.com/merewall/Tech-Blog/tree/main/public/images/logged-out-post.PNG)

_Post page when logged in:_
![logged in post page with comments and add comment option](https://github.com/merewall/Tech-Blog/tree/main/public/images/logged-in-post.PNG)

_User post page with edit/delete options:_
![user post with edit/delete buttons](https://github.com/merewall/Tech-Blog/tree/main/public/images/edit-delete-buttons.PNG)

_Dashboard:_

![user dashboard page with user posts](https://github.com/merewall/Tech-Blog/tree/main/public/images/dashboard.PNG)

_Create post page:_

![create post form](https://github.com/merewall/Tech-Blog/tree/main/public/images/create-post.PNG)

_Edit post form:_

![edit post form](https://github.com/merewall/Tech-Blog/tree/main/public/images/edit-post.PNG)

## LICENSE

This application is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## CONTRIBUTING

If you'd like to contribute to the project, please create a pull request on a new branch of the [repository](https://github.com/merewall/Tech-Blog) for review.

## TESTS

No current tests for this application.

## TECHNOLOGIES USED

- [x] HTML
- [x] CSS
- [x] JavaScript
- [x] [Materialize](https://materializecss.com/)
- [x] [Node.js](https://nodejs.org/en/)
- [x] [mysql2](https://www.npmjs.com/package/mysql2)
- [x] [express](https://www.npmjs.com/package/express)
- [x] [dotenv](https://www.npmjs.com/package/dotenv)
- [x] [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
- [x] [sequelize](https://www.npmjs.com/package/sequelize)
- [x] [express-handlebars](https://www.npmjs.com/package/express-handlebars)
- [x] [express-session](https://www.npmjs.com/package/express-session)
- [x] [bcrypt](https://www.npmjs.com/package/bcrypt)

_Other Sources:_

- [x] postData.json sourced from blog posts on [My Programming Blog](https://myprogrammingblog.com/page/2/)

## LINKS

- The [repository](https://github.com/merewall/Tech-Blog) for this application.
- The [deployed application](https://tech-blog-mw.herokuapp.com/).

## QUESTIONS

For any questions, please check out my GitHub profile or send me an email:

- GitHub: [merewall](https://github.com/merewall)
- Email: mlwall@alumni.princeton.edu
