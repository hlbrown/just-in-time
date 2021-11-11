const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  id: ID!
  firstName: String
  lastName: String
  email: String
  password: String
  profile: [Profile]
}  
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
    medication: [Medication]

  }

  type Diagnosis {
    id: ID!
    name: String
    description: String
    symptoms: String
  }

  type Medication {
    id: ID!
    name: String
    brand: String
    prescription: Boolean
    otc: Boolean
    dose: String
    interactions: String
  }

  type Query {
    users(profiles: ID): [User]
    profiles(diagnosis: ID, medication: ID): [Profile]
    diagnosis: [Diagnosis]
  }

`;

module.exports = typeDefs;
