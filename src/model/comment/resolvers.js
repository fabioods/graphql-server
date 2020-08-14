import model from './model';
import userModel from '../user/model';
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

const getCommentsByUser = async (parent) => {
  return await userModel.findById(parent.user_id);
};

export {
  createOneComment,
  getAllComments,
  getCommentsByName,
  removeOneComment,
  getCommentsByUser,
};
