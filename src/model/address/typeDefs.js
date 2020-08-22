import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
} from 'graphql';
import userType from '../user/typeDefs';
import userResolvers from '../user/resolvers';

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
      resolve: userResolvers.getUserById,
    },
  }),
});

export default addressType;
