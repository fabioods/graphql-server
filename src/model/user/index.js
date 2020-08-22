import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString,
} from 'graphql';
import userType from './typeDefs';
import userResolvers from './resolvers';
import userInputs from './inputs';

const users = {
  type: GraphQLList(userType),
  resolve: userResolvers.getAllUsers,
};

const insertOneUser = {
  type: userType,
  args: {
    input: {
      type: GraphQLNonNull(userInputs.userInputType),
    },
  },
  resolve: userResolvers.createOneUser,
};

const inserOneUserWithAddress = {
  type: userType,
  args: {
    input: {
      type: GraphQLNonNull(userInputs.userInputType),
    },
  },
  resolve: userResolvers.createOneUserWithAddresses,
};

const deleteOneUser = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: GraphQLString,
    },
  },
  resolve: userResolvers.removeOneUser,
};

const schema = {
  queries: {
    users,
  },
  mutation: {
    insertOneUser,
    inserOneUserWithAddress,
    deleteOneUser,
  },
};

export default schema;
