import { GraphQLObjectType, GraphQLString } from "graphql";

export const Profile = new GraphQLObjectType({
    name: 'profiles',
    fields: () => ({
      id: {
        type: GraphQLString
      },
      isMale: {
        type: GraphQLString
      },
      yearOfBirth: {
        type: GraphQLString
      }
    })
  });