import { QueryResolvers } from '@generated/server';

interface Resolvers {
  Query: QueryResolvers;
}

export const resolvers: Resolvers = {
  Query: {
    me: (parent, args, { me }) => {
      return {
        email: me?.email,
        uid: me?.uid,
      };
    },
  },
};
