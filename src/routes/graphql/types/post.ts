import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString } from "graphql";
import { UUIDType } from "./allTypes.js";

export const Post = new GraphQLObjectType({
    name: 'posts',
    fields: () => ({
        id: {
            type: UUIDType
        },
        title: {
            type: GraphQLString
        },
        content: {
            type: GraphQLString
        },
        authorId: {
            type: GraphQLString
        }
    })
  });

  export const CreatePostInput = new GraphQLInputObjectType({
    name: 'CreatePostInput',
    fields: {
      title: { type: GraphQLString },
      content: { type: GraphQLString },
      authorId: { type: GraphQLString },
    },
  });
  
  