import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { Post } from "./post.js";
import { NoArgument, Prisma } from "./common.js";
import { Profile } from "./profile.js";
import { UUIDType } from "./allTypes.js";

export const User = new GraphQLObjectType({
    name: 'users',
    fields: () => ({
      id: {
        type: UUIDType
      },
      name: {
        type: GraphQLString
      },
      balance: {
        type: GraphQLString
      },
      posts: {
        type: new GraphQLList(Post),
        resolve: async(source: typeof User, _: NoArgument, { prisma }: Prisma) => await prisma.post.findMany({ 
            where: { authorId: { equals: source.id },
          },}),
      },
      profile: { 
        type: Profile,
        resolve: async(source: typeof User, _: NoArgument, { prisma }: Prisma) => await prisma.profile.findFirst({ 
            where: { userId: source.id }
          },),
      },
    })
  });