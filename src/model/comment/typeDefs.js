import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';
import UserType from '../user/typeDefs';
import { getCommentsByUser } from './resolvers';

const comment = new GraphQLObjectType({
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
      resolve: getCommentsByUser,
    },
    createdAt: {
      type: GraphQLNonNull(GraphQLDateTime),
    },
    updatedAt: {
      type: GraphQLNonNull(GraphQLDateTime),
    },
  }),
});

export default comment;
