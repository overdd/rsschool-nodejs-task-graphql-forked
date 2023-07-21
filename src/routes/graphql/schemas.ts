import { Type } from '@fastify/type-provider-typebox';
import { PrismaClient } from '@prisma/client';
import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } from 'graphql';
import { Member, Post, User, Profile } from './types/index.js';

const prisma = new PrismaClient();

export const gqlResponseSchema = Type.Partial(
  Type.Object({
    data: Type.Any(),
    errors: Type.Any(),
  }),
);

export const createGqlResponseSchema = {
  body: Type.Object(
    {
      query: Type.String(),
      variables: Type.Optional(Type.Record(Type.String(), Type.Any())),
    },
    {
      additionalProperties: false,
    },
  ),
};



export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
          name: 'RootQueryType',
          fields: {
            memberType: {
              type: Member,
              args: { id: { type: GraphQLString }},
              async resolve(_, args: { id: string }) {
                return await prisma.memberType.findUnique({where: { id: args.id }});
              }
            },
            memberTypes: {
              type: new GraphQLList(Member),
              args: {},
              async resolve() {
                return await prisma.memberType.findMany();
              }
            },
            post: {
              type: Post,
              args: { id: { type: GraphQLString }},
              async resolve(_, args: { id: string }) {
                  return await prisma.post.findUnique({where: { id: args.id }});
              }
            },
            posts: {
              type: new GraphQLList(Post),
              args: {},
              async resolve() {
                return await prisma.post.findMany();
              }
            },
            user: {
              type: User,
              args: { id: { type: GraphQLString }},
              async resolve(_, args: { id: string }){
                  return await prisma.user.findUnique({ where: { id: args.id }});
              }
            },
            users: {
              type: new GraphQLList(User),
              args: {},
              async resolve() {
                return await prisma.user.findMany();
              }
            },
            profiles: {
              type: new GraphQLList(Profile),
              args: {},
              async resolve() {
                return await prisma.profile.findMany();
              }
            },
            profile: {
              type: Profile,
              args: { id: { type: GraphQLString }},
              async resolve(_, args: { id: string}){
                  return await prisma.profile.findUnique({ where: { id: args.id } });
              }
            },
          }
        })
});
