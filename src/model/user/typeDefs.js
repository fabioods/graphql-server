import {
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
} from 'graphql';
import comment from '../comment/typeDefs';
import { getAllCommentsByUser } from './resolver';

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
      type: GraphQLList(comment),
      resolve: getAllCommentsByUser,
    },
  }),
});

export default UserType;
