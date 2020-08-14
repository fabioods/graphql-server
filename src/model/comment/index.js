import {
  GraphQLList,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
} from 'graphql';
import typeDefs from './typeDefs';
import { insertOneComment, comments, commentsByName } from './resolvers';

const insertOneComment = {
  type: typeDefs,
  args: {
    input: {
      type: new GraphQLInputObjectType({
        name: 'CommentInput',
        fields: {
          name: {
            type: GraphQLNonNull(GraphQLString),
          },
          content: {
            type: GraphQLString,
          },
        },
      }),
    },
  },
  resolve: insertOneComment,
};

const getComents = {
  type: GraphQLList(typeDefs),
  resolve: comments,
};

const getCommentsByName = {
  type: GraphQLList(typeDefs),
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: commentsByName,
};

const schema = {
  queries: {
    getComents,
    getCommentsByName,
  },
  mutation: {
    insertOneComment,
  },
};

export default schema;
