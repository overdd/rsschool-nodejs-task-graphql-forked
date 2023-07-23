import { Type } from '@fastify/type-provider-typebox';
import { GraphQLObjectType, GraphQLSchema, GraphQLList } from 'graphql';
import { memberType, UUIDType, MemberTypeIdAsEnum,Post, User, Profile, CreateUserInput, CreatePostInput, CreateProfileInput, ChangePostInput, ChangeUserInput, ChangeProfileInput } from './types/allTypes.js';


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



export const rootSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
          name: 'RootQueryType',
          fields: {
            memberType: {
              type: memberType,
              args: { id: { type: MemberTypeIdAsEnum }},
            },
            memberTypes: {
              type: new GraphQLList(memberType),
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
        }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      createUser: {
        type: User,
        args: {
          dto: { type: CreateUserInput }
        },
      },
      createPost: {
        type: Post,
        args: {
          dto: { type: CreatePostInput }
        },
      },
      createProfile: {
        type: Post,
        args: {
          dto: { type: CreateProfileInput }
        },
      },
      deleteUser: {
        type: UUIDType,
        args: {
          id: { type: UUIDType },
        },
      },
      deletePost: {
        type: UUIDType,
        args: {
          id: { type: UUIDType },
        }
      },
      deleteProfile: {
        type: UUIDType,
        args: {
          id: { type: UUIDType },
        }
      },
      changeUser: {
        type: User,
        args: {
          id: { type: UUIDType },
          dto: { type: ChangeUserInput }
        }
      },
      changePost: {
        type: Post,
        args: {
          id: { type: UUIDType },
          dto: { type: ChangePostInput }
        }
      },
      changeProfile: {
        type: Profile,
        args: {
          id: { type: UUIDType },
          dto: { type: ChangeProfileInput }
        }
      },
  },})
});
