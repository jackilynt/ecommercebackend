###### E-Commerce Backend 

This is the backend server for an e-commerce website. It provides the necessary APIs and functionality to manage products, categories, tags, and user orders.

###### Table of Contents
Features
Technologies
Getting Started
Installation
Configuration
Usage
API Documentation
Contributing
License

###### Features
Create, Read, Update, and Delete operations for products, categories, tags, and orders.
Authentication and authorization using JWT (JSON Web Tokens).
Database persistence using MySQL.
RESTful API architecture.
Error handling and validation.
Data seeding for quick setup and testing.
Technologies
Node.js
Express.js
MySQL
Sequelize ORM
JSON Web Tokens (JWT)
VSCode (for development)
Insomnia (for API testing)

###### Getting Started
To get started with the project, follow these steps:

###### Installation
Clone the repository: git clone https://github.com/jackilynt/ecommercebackend.git
Change to the project directory: cd ecommercebackend
Install the dependencies: npm install

###### Configuration
Set up the database connection:
Create a MySQL database for the project.
Update the database configuration in the .env file with your database credentials.
Set the appropriate values for DB_NAME, DB_USER, and DB_PW.
Note If developing from scratch clone this starter code https://github.com/coding-boot-camp/fantastic-umbrella

###### Usage
Start the server: npm start or npm run dev (with nodemon for development).
The server will be running at http://localhost:3001.
Run the seeds using npm run seed
Ensure the proper modules are installed using npm install
You can test the API endpoints using Postman or any other API testing tool.


###### API Documentation

GET
http://localhost:3001/api/categories
http://localhost:3001/api/products
http://localhost:3001/api/tags

GET one id
http://localhost:3001/api/categories/1
http://localhost:3001/api/products/1
http://localhost:3001/api/tags/1

POST
http://localhost:3001/api/categories/
{
"categoryname": "Underwear"
}

PUT
http://localhost:3001/api/categories/6
{
"categoryname": "Undergarments"
}

DELETE
http://localhost:3001/api/categories/6

###### Contributing
Contributions to this project are welcome. To contribute:

Fork the repository.
Create a new branch: git checkout -b feature-name
Make your changes and commit them: git commit -m 'Add some feature'
Push the changes to your branch: git push origin feature-name
Submit a pull request.

###### License
This project is created by Jackilyn Tan and licensed under the MIT License.



