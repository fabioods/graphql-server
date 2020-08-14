import model from './model';
const insertOneComment = async (_, args) => {
  const response = await model.create(args.input);
  return response;
};

const comments = async () => {
  const response = await model.find();
  return response;
};

const commentsByName = async (_, args) => {
  const response = await model.find({ name: args.name });
  return response;
};

export { insertOneComment, comments, commentsByName };
