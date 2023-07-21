import { GraphQLObjectType, GraphQLString } from "graphql";
import { UUIDType } from "./uuid.js";

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
        type: GraphQLString
      },
      memberTypeId: {
        type: GraphQLString
      }
    })
  });