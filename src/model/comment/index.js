import {
  GraphQLList,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
} from 'graphql';
import typeDefs from './typeDefs';
import model from './model';

const insertOneComment = {
  type: typeDefs,
  args: {
    input: {
      type: new GraphQLInputObjectType({
        name: 'CommentInput',
        fields: {
          name: {
            type: GraphQLString,
          },
          content: {
            type: GraphQLString,
          },
        },
      }),
    },
  },
  resolve: async (_, args) => {
    const response = await model.create(args.input);
    return response;
  },
};

const getComents = {
  type: GraphQLList(typeDefs),
  resolve: async () => {
    const response = await model.find();
    return response;
  },
};

const getCommentsByName = {
  type: GraphQLList(typeDefs),
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: async (_, args) => {
    const response = await model.find({ name: args.name });
    return response;
  },
};

const schema = {
  queries: {
    getComents,
    getCommentsByName,
  },
  mutation: {
    insertOneComment,
  },
};

export default schema;
