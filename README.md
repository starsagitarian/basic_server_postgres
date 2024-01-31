# basic_server_postgres
This is a simple REST API created as bookshelf application for creating and curating books based on authors, formats and titles. There are 3 data entities as described below:

## Titles
A title can have many authors

## Authors
An Author can have many titles

## Formats
A title can have only one format

The API provides all the basic CRUD endpoints for each of the above entities.

## How to access the API

The API can be accessed at port:3000 from your local machines. 
Create a local PostgreSQL db using psql command propmt or PGAdmin or any other SQL DB UI.
Once done, use the credentials in sequelize.config.ts to configure and connect your db to the repo
Here I have used Nodemon as a dev dependency and hence after running the customary "npm install" you can now fire up the API by typing in the command "npm run dev" or "npm run start". 
Once all the tables are in place, and the server is up and running, you can query the API with the routes provided. 

Described below is the tech stack

## Tech stack
### Node.js
### Express.js
### PostgreSQL
### Sequelize ORM
### Typescript
### handlebars

Testing

...To be added

