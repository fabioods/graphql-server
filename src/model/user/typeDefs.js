import {
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
} from 'graphql';
import commentType from '../comment/typeDefs';
import userResolvers from './resolvers';
import addressType from '../address/typeDefs';

const userType = new GraphQLObjectType({
  name: 'userType',
  fields: () => ({
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    login: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLBoolean,
    },
    comments: {
      type: GraphQLList(commentType),
      resolve: userResolvers.getAllCommentsByUser,
    },
    addresses: {
      type: GraphQLList(addressType),
      resolve: userResolvers.getAddressesByUser,
    },
  }),
});

export default userType;
