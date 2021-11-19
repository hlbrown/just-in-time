import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $phoneNumber: String
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      phoneNumber: $phoneNumber
    ) {
      token
      user {
        id
      }
    }
  }
`;

export const CREATE_PROFILE = gql`
  mutation createProfile($profileInput: ProfileInput!){
	createProfile (profileInput: $profileInput){
    firstName
    lastName
    sex
    address
    image
    age
    height
    weight
    bloodType
    organDonor
    pastSurgeries
    pcpName
    pcpAddress
    pcpPhoneNumber
    emergencyContactName
    emergencyContactNumber
  }
}
`;

export const UPDATE_PROFILE = gql`
mutation updateProfile($_id: ID!, $profileInput: ProfileInput!){
	updateProfile (_id: $_id, profileInput: $profileInput){
    firstName
    lastName
    sex
    address
    image
    age
    height
    weight
    bloodType
    organDonor
    pastSurgeries
    pcpName
    pcpAddress
    pcpPhoneNumber
    emergencyContactName
    emergencyContactNumber
    diagnosis{name}
    medication{name}
  }
}
`;
export const ADD_MEDICATION = gql`
mutation addMedication($medicationInput: MedicationInput!){
	addMedication (medicationInput: $medicationInput){
  	name
    brand
    prescription
    otc
    dose
    interactions
  }
}
`;
export const ADD_DIAGNOSIS = gql`
mutation addDiagnosis($diagnosisInput: DiagnosisInput!){
	addDiagnosis (diagnosisInput: $diagnosisInput){
  	name
   	commonlyKnowAs
    description
    symptoms
  }
}
`;
