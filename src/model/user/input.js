import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
} from 'graphql';

const UserInput = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    login: {
      type: GraphQLNonNull(GraphQLString),
    },
    status: {
      type: GraphQLNonNull(GraphQLBoolean),
    },
  },
});

export default UserInput;
