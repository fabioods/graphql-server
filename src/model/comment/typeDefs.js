import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';
import userType from '../user/typeDefs';
import userResolvers from '../user/resolvers';

const commentType = new GraphQLObjectType({
  name: 'commentType',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    user_id: {
      type: GraphQLString,
    },
    user: {
      type: userType,
      resolve: userResolvers.getUserById,
    },
    createdAt: {
      type: GraphQLDateTime,
    },
    updatedAt: {
      type: GraphQLDateTime,
    },
  }),
});

export default commentType;
