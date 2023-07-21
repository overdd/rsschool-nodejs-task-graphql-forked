import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { createGqlResponseSchema, gqlResponseSchema, schema } from './schemas.js';
import memberTypeResolvers from './resolvers/member.resolver.js';
import postResolver from './resolvers/post.resolver.js';
import userResolver from './resolvers/user.resolver.js';
import profileResolver from './resolvers/profile.resolver.js';
import { graphql } from 'graphql';


const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  const { prisma } = fastify;

  fastify.route({
    url: '/',
    method: 'POST',
    schema: {
      ...createGqlResponseSchema,
      response: {
        200: gqlResponseSchema,
      },
    },
    async handler(req, reply) {
      const { query, variables } = req.body;

      const result = await graphql({
        schema: schema,
        source: query,
        rootValue: {
          ...memberTypeResolvers,
          ...postResolver,
          ...userResolver,
          ...profileResolver,
        },
        variableValues: variables,
        contextValue: { prisma }
      });

      if (result.errors) {
        return reply.code(400).send({ errors: result.errors });
      }

      return result;
    },
  });
};

export default plugin;
