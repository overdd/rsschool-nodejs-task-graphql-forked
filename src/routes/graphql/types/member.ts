import { GraphQLObjectType, GraphQLString } from "graphql";

export const Member = new GraphQLObjectType({
    name: "member",
    fields: () => ({
        id: {
            type: GraphQLString
        },
        discount: {
            type: GraphQLString
        },
        postsLimitPerMonth: {
            type: GraphQLString
        },
    })
  });