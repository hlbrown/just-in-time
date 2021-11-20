import { gql } from '@apollo/client';

export const QUERY_PROFILE = gql`
{
  profile(_id: "ID!"){
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
   diagnosis{
     name
     commonlyKnowAs
     description
     symptoms
   }
   medication{
     name
     brand
     prescription
     otc
     dose
     interactions
    }
  }
}
`;



export const QUERY_ALL_PROFILES= gql`
  {
    profiles{
      id
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
      diagnosis{
        id
        name
        commonlyKnowAs
        description
        symptoms
      }
      medication{
        id
        name
        brand
        prescription
        otc
        dose
        interactions
      }
    }
  }
`;

export const QUERY_All_USERS = gql`
  {
    users{
      id
      firstName
      lastName
      email
      password
      phoneNumber
      image	
    }
  }
`;

export const QUERY_USER = gql`
  {
    user{
      firstName
      lastName
      email
      password
      phoneNumber
      image
      profile{
        id
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
        emergencyContactName
        diagnosis {
          name
          commonlyKnowAs
          description
          symptoms
        }
        medication {
          name
          brand
          prescription
          otc
          dose
          interactions
        }
      }
    }
  }
`;
