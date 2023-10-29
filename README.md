 [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  # Title
    E-COMMERCE BACKEND SERVER
  
  ## Description
   "This e-commerce backend server provides you with an effortless solution for monitoring sales and managing products. Streamline your online store operations and stay in control of your business with ease."
  
  ## Table of Contents
  
  - [Installation](#Installation)
  - [Notes](#Notes)
  - [Environment varibles](#Environment-variables)
  - [Usage](#usage)
  - [Features](#features)
  - [Links](#links)
  - [credits](#credits)
  - [License](#license)
  
  ## Installation

  In order to install the packages like express, sequelize and mysql2, execute 1.
  1. Run command : ```npm install or i```
  2. Install mysql in your system
  3. To logged into the mysql database, run command: ```mysql -u root -p```
  4. To execute the database with predefine data, run command: ``` npm run seed ```

  ## Notes

- expressjs: Express.js is a minimal and flexible web application framework for Node.js. It uses middleware to perform various tasks during the request/response cycle and more. Also simple way to define the routes for the application is possible through this framework. Also it support the HTTP methods like GET, POST, PUT , DELETE which makes it easy to handle the various requests
- Sequelize: Sequelize is a popular Node.js Object-Relational Mapping (ORM) library that simplifies database operations by providing an abstraction layer over various relational database management systems (RDBMS) such as MySQL, PostgreSQL, SQLite, and more
- mysql2: Mysql2 is a popular Node.js driver for MySQL databases. It is used to connect and interact with MySQL databases from Node.js applications
- seeding: Seeding refers to populating the database with a predefined data.It is used in the testing phase in a project
- Insomnia: Popular REST API client that allow to test and interact with api routes and API

## Environment variables

- Run the command: ```npm install dotenv ``` to setup and config the enviroment variables
- Replace with your mysql credentials in the your_username, your_password to the following variables:
```
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
```
## Usage

Once install, the server can be run with the command 'npm start', and test the API routes with the help of insomnia

 ## Features
-   Optimizing data retrieval for products, categories and tags with well structured data models along with precise access to the desired information with CRUD(create read update delete) operation.

  ## links
- Link of my [Github repository](https://github.com/Sabinkthapa/E-Commerce_BackendSever.git)
- Link to screencastify of insomnia Demo [Application_walkthrough] (https://drive.google.com/file/d/1kLUFzSflsZmEqXOYHPF0n6v4EwgTQ_w7/view)

  ## Credits
- npm: [node Package manager](https://www.npmjs.com)
- Expressjs: [nodejs popular web framework](https://expressjs.com)
- Sequelize: [Promise-based Node.js ORM tool](https://www.npmjs.com/package/sequelize)
- Mysql2: [Documentation of mysqlw](https://www.npmjs.com/package/mysql2)
- Insomnia: [Rest client](https://insomnia.rest/)

  ## License
   All resources provided by this project are available for free use and distribution,subject to the term of Apache license.
                                      (c)Copyright 2023 Sabin Thapa