import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
} from 'graphql';
import userType from '../user/typeDefs';
import { getUserById } from '../user/resolver';

const addressType = new GraphQLObjectType({
  name: 'addressType',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    street: {
      type: GraphQLString,
    },
    number: {
      type: GraphQLInt,
    },
    city: {
      type: GraphQLString,
    },
    user_id: {
      type: GraphQLString,
    },
    user: {
      type: userType,
      resolve: getUserById,
    },
  }),
});

export default addressType;
