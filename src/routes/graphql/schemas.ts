import { Type } from '@fastify/type-provider-typebox';
import { GraphQLObjectType, GraphQLSchema, GraphQLList } from 'graphql';
import { Member, Post, User, Profile } from './types/allTypes.js';
import { UUIDType } from './types/allTypes.js';
import { MemberTypeId } from './types/member.js';

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
              args: { id: { type: MemberTypeId }},
            },
            memberTypes: {
              type: new GraphQLList(Member),
              args: {},
            },
            post: {
              type: Post,
              args: { id: { type: UUIDType }},
            },
            posts: {
              type: new GraphQLList(Post),
              args: {},
            },
            user: {
              type: User,
              args: { id: { type: UUIDType }},
            },
            users: {
              type: new GraphQLList(User),
              args: {},
            },  
            profile: {
              type: Profile,
              args: { id: { type: UUIDType }},
            },
            profiles: {
              type: new GraphQLList(Profile),
              args: {},
            },

          }
        })
});
