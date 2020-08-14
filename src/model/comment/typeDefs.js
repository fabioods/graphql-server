import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';
import UserType from '../user/typeDefs';
import { getUserById } from './resolvers';

const commentType = new GraphQLObjectType({
  name: 'CommentType',
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
      type: UserType,
      resolve: getUserById,
    },
    createdAt: {
      type: GraphQLNonNull(GraphQLDateTime),
    },
    updatedAt: {
      type: GraphQLNonNull(GraphQLDateTime),
    },
  }),
});

export default commentType;
