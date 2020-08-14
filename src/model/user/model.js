import { Schema, model } from 'mongoose';

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    login: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('user', schema);
