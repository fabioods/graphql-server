import { Schema, model } from 'mongoose';

const addressModel = new Schema(
  {
    street: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('address', addressModel);
