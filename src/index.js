import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import schema from './model/schema';

const server = new ApolloServer({
  schema,
  playground: process.env.NODE_ENV === 'development',
});

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.listen(4000).then(() => {
  console.log('Server running');
});
