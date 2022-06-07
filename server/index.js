const express = require('express');
require('dotenv').config();
const colors = require('colors');
const schema = require('./schema/schema');
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');
const { graphqlHTTP } = require('express-graphql');

const app = express();
connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, () => console.log(`Listening on port ${port}`));
