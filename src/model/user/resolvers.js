import {} from 'graphql';
import userModel from './model';
import commentModel from '../comment/model';
import addressModel from '../address/model';

const getAllUsers = async () => {
  return await userModel.find();
};

const getAllCommentsByUser = async (parent) => {
  return await commentModel.find({ user_id: parent.id });
};

const getAddressesByUser = async (parent) => {
  return await addressModel.find({ user_id: parent._id });
};

const createOneUser = async (_, args) => {
  return await userModel.create(args.input);
};

const createOneUserWithAddresses = async (_, { input }) => {
  const { addresses } = input;
  const createUser = await userModel.create(input);
  addresses.map(async (address) => {
    address.user_id = createUser._id;
    await addressModel.create(address);
  });
  return await userModel.findById(createUser._id);
};

const removeOneUser = async (_, { id }) => {
  return !!(await userModel.findByIdAndRemove(id));
};

const getUserById = async (parent) => {
  return await userModel.findById(parent.user_id);
};

const userResolvers = {
  getAllUsers,
  getAllCommentsByUser,
  getAddressesByUser,
  createOneUser,
  createOneUserWithAddresses,
  removeOneUser,
  getUserById,
};

export default userResolvers;
