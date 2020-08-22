import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

const commentInputType = new GraphQLInputObjectType({
  name: 'commentInputType',
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

const commentInputs = {
  commentInputType,
};

export default commentInputs;
