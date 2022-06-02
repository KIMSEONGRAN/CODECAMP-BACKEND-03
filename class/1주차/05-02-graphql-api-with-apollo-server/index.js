// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from 'apollo-server';

// The GraphQL schema
// hello에 대한 리턴 타입도 설정해줘야함.
// 이친구가 express의 swagger와 비슷한 역할!
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});