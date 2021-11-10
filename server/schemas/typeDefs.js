const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    firstName: String
    lastName: String
  }

  type Query {
    profiles: [Profile]
  }

`;

module.exports = typeDefs;
