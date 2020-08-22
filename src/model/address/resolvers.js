import addressModel from './model';

const createOneAddress = async (_, { input }) => {
  return await addressModel.create(input);
};

const getAllAddress = async () => {
  return await addressModel.find();
};

const addressResolvers = {
  createOneAddress,
  getAllAddress,
};

export default addressResolvers;
