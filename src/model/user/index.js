import userType from './typeDefs';
import { GraphQLList, GraphQLNonNull } from 'graphql';
import { getAllUsers, insertOneUser } from './resolver';
import UserInput from './input';

const users = {
  type: GraphQLList(userType),
  resolve: getAllUsers,
};

const inserOneUser = {
  type: userType,
  args: {
    input: {
      type: GraphQLNonNull(UserInput),
    },
  },
  resolve: insertOneUser,
};

const schema = {
  queries: {
    users,
  },
  mutation: {
    inserOneUser,
  },
};

export default schema;
