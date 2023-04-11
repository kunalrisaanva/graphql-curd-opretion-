const express = require("express");
const app = express();
const PORT = 9999;
const { graphqlHTTP } = require('express-graphql');
const url = "mongodb://localhost:27017/GRA"
const connecetDB = require("./config/dbConnection");
connecetDB(url);


 
const schema = require("./graphql/index")


app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
  );


  
app.listen(PORT,() => console.log(`server is running in PORT ${PORT}`));
