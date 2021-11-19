const { AuthenticationError } = require("apollo-server-express");
const { User, Profile, Diagnosis, Medication } = require("../models");
const { signToken } = require("../utils/auth");
const { Kind, GraphQLScalarType } = require("graphql");

const resolvers = {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(+ast.value); // ast value is always in string format
      }
      return null;
    },
  }),
  Query: {
    users: async (parent, { profile }) => {
      
      const params = {};
      if (profile) {
        params.profile = profile;
      }
      return await User.find(params)
        .populate({
          path: "profile",
          populate: [{ path: "medication" }, { path: "diagnosis" }],
        })
        .select("-password");
    },
    user: async (parent, args, context) => {
        if(context.user) {
            const user = await User.findById(context.user._id).select('-__v -password').populate({
              path: "profile",
              populate: [{ path: "medication" }, { path: "diagnosis" }],
            });

            return user;
        }
    },

    profiles: async (parent, { diagnosis, medication }) => {
      // for future use so can be queried profile by medication or diagnosis
      const params = {};
      if (diagnosis) {
        params.diagnosis = diagnosis;
      }

      if (medication) {
        params.medication = medication;
      }

      return await Profile.find(params)
        .populate("diagnosis")
        .populate("medication");
    },
    profile: async (parent, { _id }) => {
      return await Profile.findById(_id)
        .populate("diagnosis")
        .populate("medication");
    },
    diagnosis: async () => {
      return await Diagnosis.find();
    },
    medication: async () => {
      return await Medication.find();
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    createProfile: async (parent, args) => {
      const profile = await Profile.create(args.profileInput);
      return profile;
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    updateProfile: async (parent, { _id, profileInput }) => {
      return await Profile.findByIdAndUpdate(_id, { ...profileInput }, { new: true });
    },
    addMedication: async (parent, args) => {
      const medication = await Medication.create(args.medicationInput);
      return medication;
    },
    addDiagnosis: async (parent, args) => {
      const diagnosis = await Diagnosis.create(args.diagnosisInput);
      return diagnosis;
    },
    updateDiagnosis: async (parent, { _id, diagnosisInput }) => {
      return await Diagnosis.findByIdAndUpdate(_id, { ...diagnosisInput }, { new: true });
    },
    updateMedication: async (parent, { _id, medicationInput }) => {
      return await Medication.findByIdAndUpdate(_id, { ...medicationInput }, { new: true });
    }
  },
};

module.exports = resolvers;
