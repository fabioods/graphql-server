import { GraphQLList } from 'graphql';
import addressType from './typeDef';
import addressInput from './input';
import { createOneAddress, getAllAddress } from './resolver';

const insertOneAddress = {
  type: addressType,
  args: {
    input: {
      type: addressInput,
    },
  },
  resolve: createOneAddress,
};

const address = {
  type: GraphQLList(addressType),
  resolve: getAllAddress,
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
