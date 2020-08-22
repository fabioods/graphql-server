import {
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
} from 'graphql';
import commentType from './typeDefs';
import commentResolvers from './resolvers';
import commentInputs from './inputs';

const insertOneComment = {
  type: commentType,
  args: {
    input: {
      type: GraphQLNonNull(commentInputs.commentInputType),
    },
  },
  resolve: commentResolvers.createOneComment,
};

const deleteOneComment = {
  type: GraphQLBoolean,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve: commentResolvers.removeOneComment,
};

const comments = {
  type: GraphQLList(commentType),
  resolve: commentResolvers.getAllComments,
};

const commentByName = {
  type: GraphQLList(commentType),
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: commentResolvers.getCommentsByName,
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
