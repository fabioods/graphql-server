import model from './model';

const createOneComment = async (_, args) => {
  const response = await model.create(args.input);
  return response;
};

const removeOneComment = async (_, args) => {
  return !!(await model.findByIdAndRemove(args.id));
};

const getAllComments = async () => {
  const response = await model.find();
  return response;
};

const getCommentsByName = async (_, args) => {
  const response = await model.find({ name: args.name });
  return response;
};

const commentResolvers = {
  createOneComment,
  getAllComments,
  getCommentsByName,
  removeOneComment,
};

export default commentResolvers;
