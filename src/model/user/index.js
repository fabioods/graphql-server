import userType from './typeDefs';
import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString,
} from 'graphql';
import {
  getAllUsers,
  createOneUser,
  createOneUserWithAddresses,
  removeOneUser,
} from './resolver';
import UserInput from './input';

const users = {
  type: GraphQLList(userType),
  resolve: getAllUsers,
};

const insertOneUser = {
  type: userType,
  args: {
    input: {
      type: GraphQLNonNull(UserInput),
    },
  },
  resolve: createOneUser,
};

const inserOneUserWithAddress = {
  type: userType,
  args: {
    input: {
      type: GraphQLNonNull(UserInput),
    },
  },
  resolve: createOneUserWithAddresses,
};

const deleteOneUser = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: GraphQLString,
    },
  },
  resolve: removeOneUser,
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
