import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: process.env.SERVER_URL,
});

export default client;