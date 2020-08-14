import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

const CommentInput = new GraphQLInputObjectType({
  name: 'CommentInput',
  fields: {
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    content: {
      type: GraphQLNonNull(GraphQLString),
    },
    user_id: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
});

export { CommentInput };
