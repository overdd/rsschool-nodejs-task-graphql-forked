import { GraphQLObjectType, GraphQLString } from "graphql";

export const User = new GraphQLObjectType({
    name: 'users',
    fields: () => ({
      id: {
        type: GraphQLString
      },
      name: {
        type: GraphQLString
      },
      balance: {
        type: GraphQLString
      }
    })
  });