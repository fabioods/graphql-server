import { GraphQLList } from 'graphql';
import addressType from './typeDefs';
import addressInputs from './inputs';
import addressResolvers from './resolvers';

const insertOneAddress = {
  type: addressType,
  args: {
    input: {
      type: addressInputs.addressInputType,
    },
  },
  resolve: addressResolvers.createOneAddress,
};

const address = {
  type: GraphQLList(addressType),
  resolve: addressResolvers.getAllAddress,
};

const schema = {
  queries: {
    address,
  },
  mutations: {
    insertOneAddress,
  },
};

export default schema;
