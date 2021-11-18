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
    pcpPhoneNumber: String
    emergencyContactName: String
    emergencyContactNumber: String
    diagnosis: [Diagnosis]
    medication: [Medication]

  }
  
  input ProfileInput {
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
    pcpPhoneNumber: String
    emergencyContactName: String
    emergencyContactNumber: String
  }
  
  type Diagnosis {
    id: ID!
    name: String
    commonlyKnowAs: String  
    description: String
    symptoms: String
  }

  input DiagnosisInput {
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

  input MedicationInput {
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
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, phoneNumber: String): Auth
    createProfile(profileInput: ProfileInput!): Profile
    updateUser(firstName: String, lastName: String, email: String, password: String, phoneNumber: Float): User
    updateProfile(_id: ID! profileInput: ProfileInput): Profile
    login(email: String!, password: String!): Auth
    addMedication(medicationInput: MedicationInput!): Medication
    addDiagnosis(diagnosisInput: DiagnosisInput!): Diagnosis
    updateMedication(_id: ID! medicationInput: MedicationInput): Medication
    updateDiagnosis(_id: ID! diagnosisInput: DiagnosisInput): Diagnosis
  }

`;

module.exports = typeDefs;
