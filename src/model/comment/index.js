import {
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
} from 'graphql';
import CommentType from './typeDefs';
import {
  createOneComment,
  removeOneComment,
  getAllComments,
  getCommentsByName,
} from './resolvers';
import { CommentInput } from './input';

const insertOneComment = {
  type: CommentType,
  args: {
    input: {
      type: GraphQLNonNull(CommentInput),
    },
  },
  resolve: createOneComment,
};

const deleteOneComment = {
  type: GraphQLBoolean,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve: removeOneComment,
};

const comments = {
  type: GraphQLList(CommentType),
  resolve: getAllComments,
};

const commentByName = {
  type: GraphQLList(CommentType),
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: getCommentsByName,
};

const schema = {
  queries: {
    comments,
    commentByName,
  },
  mutation: {
    insertOneComment,
    deleteOneComment,
  },
};

export default schema;
