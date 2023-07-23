import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString } from "graphql";
import { MemberTypeIdAsEnum, UUIDType, memberType } from "./allTypes.js";
import { NoArgument, Prisma } from "./common.js";

export const Profile = new GraphQLObjectType({
    name: 'profiles',
    fields: () => ({
      id: {
        type: UUIDType
      },
      isMale: {
        type: GraphQLString
      },
      yearOfBirth: {
        type: GraphQLString
      },
      userId: {
        type: UUIDType
      },
      memberType: {
        type: memberType,
        resolve: async(source: typeof Profile, _: NoArgument, { prisma }: Prisma) => await prisma.memberType.findFirst({ 
          where: { id: { equals: source.memberTypeId }
        },
        }),
      },
    })
  });

  export const CreateProfileInput = new GraphQLInputObjectType({
    name: 'CreateProfileInput',
    fields: {
      isMale: {
        type: GraphQLString
      },
      yearOfBirth: { 
        type: GraphQLString 
      },
      memberType: { 
        type: MemberTypeIdAsEnum 
      },
      userId: { 
        type: UUIDType 
      },
    },
  });