import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';
import addressInputs from '../address/inputs';

const userInputType = new GraphQLInputObjectType({
  name: 'userInputType',
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
      type: GraphQLList(addressInputs.addressInputType),
    },
  },
});

const userInputs = {
  userInputType,
};

export default userInputs;
