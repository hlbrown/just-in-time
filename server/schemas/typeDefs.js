const { gql } = require('apollo-server-express');

const typeDefs = gql`
scalar Date

type User {
  id: ID!
  firstName: String
  lastName: String
  email: String
  password: String
  phoneNumber: String
  image: String
  profile: [Profile]
}

type Profile {
    id: ID!
    firstName: String
    lastName: String
    sex: String
    address: String
    image: String
    dob: Date
    height: String
    weight: Int
    bloodType: String
    organDonor: Boolean
    pastSurgeries: Boolean
    pcpName: String
    pcpAddress: String
    pcpPhoneNumber: Int
    emergencyContactName: String
    emergencyContactNumber: Int
    diagnosis: [Diagnosis]
    medication: [Medication]

  }

  type Diagnosis {
    id: ID!
    name: String
    commonlyKnowAs: String  
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
  
  type Auth {
    token: ID
    user: User
  }


  type Query {
    users(profiles: ID): [User]
    user(_id: ID!): User
    profiles(diagnosis: ID, medication: ID): [Profile]
    profile(_id: ID!): Profile
    diagnosis: [Diagnosis]
    medication: [Medication]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, phoneNumber: Float!, dob: Float!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String, phoneNumber: Float, dob: Float): User
    updateProfile(_id: ID! firstName: String, lastName: String, address: String, image: String, dob: Date, height: Float, weight: Float, bloodType: String, organDonor: Boolean, pastSurgeries: Boolean, pcpName: String, pcpAddress: String, pcpPhoneNumber: Float, emergencyContactName: String, emergencyContactNumber: Float): Profile
    login(email: String!, password: String!): Auth
  }

`;

module.exports = typeDefs;
