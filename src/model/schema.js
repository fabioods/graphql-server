import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import comment from './comment';
import user from './user';

const rootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...comment.queries,
    ...user.queries,
  },
});

const rootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    ...comment.mutation,
    ...user.mutation,
  },
});

const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});

export default schema;
