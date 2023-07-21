import { GraphQLEnumType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

type MemberTypeId = 'basic' | 'business';

export const MemberTypeId = new GraphQLNonNull(
  new GraphQLEnumType({
    name: 'MemberTypeId',
    values: {
      basic: { value: 'basic' },
      business: { value: 'business' },
    },
  }),
);


export const Member = new GraphQLObjectType({
    name: "member",
    fields: () => ({
        id: {
            type: MemberTypeId
        },
        discount: {
            type: GraphQLString
        },
        postsLimitPerMonth: {
            type: GraphQLString
        },
    })
  });