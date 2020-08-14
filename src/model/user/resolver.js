import {} from 'graphql';
import model from './model';
import commentModel from '../comment/model';

const getAllUsers = async () => {
  return await model.find();
};

const insertOneUser = async (_, args) => {
  return await model.create(args.input);
};

const getAllCommentsByUser = async (parent) => {
  return await commentModel.find({ user_id: parent.id });
};

export { getAllUsers, insertOneUser, getAllCommentsByUser };
