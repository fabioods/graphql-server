import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

const addressInput = new GraphQLInputObjectType({
  name: 'addressInput',
  fields: {
    street: {
      type: GraphQLNonNull(GraphQLString),
    },
    number: {
      type: GraphQLNonNull(GraphQLInt),
    },
    city: {
      type: GraphQLNonNull(GraphQLString),
    },
    user_id: {
      type: GraphQLString,
    },
  },
});

export default addressInput;
