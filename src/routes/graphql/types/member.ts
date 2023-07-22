import { GraphQLEnumType, GraphQLObjectType, GraphQLString } from "graphql";

export type MemberTypeId = 'basic' | 'business';

export const MemberTypeIdAsEnum = 
  new GraphQLEnumType({
    name: 'MemberTypeId',
    values: {
      basic: { value: 'basic' },
      business: { value: 'business' },
    },
  });



export const memberType = new GraphQLObjectType({
    name: "member",
    fields: () => ({
        id: {
            type: MemberTypeIdAsEnum
        },
        discount: {
            type: GraphQLString
        },
        postsLimitPerMonth: {
            type: GraphQLString
        },
    })
  });