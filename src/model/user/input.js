import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';
import addressInput from '../address/input';

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
    addresses: {
      type: GraphQLList(addressInput),
    },
  },
});

export default UserInput;
