import {
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
} from 'graphql';
import commentType from '../comment/typeDefs';
import { getAllCommentsByUser, getAddressesByUser } from './resolver';
import addressType from '../address/typeDef';

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    login: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLBoolean,
    },
    comments: {
      type: GraphQLList(commentType),
      resolve: getAllCommentsByUser,
    },
    addresses: {
      type: GraphQLList(addressType),
      resolve: getAddressesByUser,
    },
  }),
});

export default UserType;
