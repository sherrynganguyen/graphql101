require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const DBUSER = process.env.DBUSER;
const DBPASSWORD = process.env.DBPASSWORD;

PORT = 8080;
const app = express();
app.use(morgan('dev'));

const url = `mongodb+srv://${DBUSER}:${DBPASSWORD}@cluster0-onasa.mongodb.net/graphql?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  (!err) ? console.log("Connected successfully to database") : console.log('Error connecting to database');
});

app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`Server is listening to PORT: ${PORT}`);
});