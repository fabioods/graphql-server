import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import comment from './comment';
import user from './user';
import address from './address';

const rootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...comment.queries,
    ...user.queries,
    ...address.queries,
  },
});

const rootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    ...comment.mutation,
    ...user.mutation,
    ...address.mutations,
  },
});

const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});

export default schema;
