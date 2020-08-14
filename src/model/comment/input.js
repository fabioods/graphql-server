import { GraphQLInputObjectType, GraphQLString } from 'graphql';

const CommentInput = new GraphQLInputObjectType({
  name: 'CommentInput',
  fields: {
    name: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
  },
});

export { CommentInput };
