require('dotenv').config()

const { ApolloServer, PubSub } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const MONGO_URI = process.env.MONGO_URI;
const pubsub = new PubSub();


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => { 
        return {req, pubsub} 
    }
  })

mongoose
  .connect(MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
   })
  .then(() => {
    console.log('MongoDB Connected');
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });