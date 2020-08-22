import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

const addressInputType = new GraphQLInputObjectType({
  name: 'addressInputType',
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

const addressInputs = {
  addressInputType,
};

export default addressInputs;
