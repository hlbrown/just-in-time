const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    id: ID!
    firstName: String
    lastName: String
    address: String
    image: String
    dob: Float
    height: Float
    weight: Float
    bloodType: String
    organDonor: Boolean
    pastSurgeries: Boolean
    pcpName: String
    pcpAddress: String
    pcpPhoneNumber: Float
    emergencyContactName: String
    emergencyContactNumber: Float
    diagnosis: [Diagnosis]
  }

  type Diagnosis {
    id: ID!
    name: String
    description: String
    symptoms: String
  }

  type Query {
    profiles(diagnosis: ID, name: String): [Profile]
    diagnosis: [Diagnosis]
  }

`;

module.exports = typeDefs;
