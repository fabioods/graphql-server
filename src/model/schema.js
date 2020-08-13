import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import comment from './comment';

const rootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...comment.queries,
  },
});

const rootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    ...comment.mutation,
  },
});

const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});

export default schema;
