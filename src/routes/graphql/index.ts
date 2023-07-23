import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { createGqlResponseSchema, gqlResponseSchema, rootSchema } from './schemas.js';
import memberTypeResolvers from './resolvers/member.resolver.js';
import postResolver from './resolvers/post.resolver.js';
import userResolver from './resolvers/user.resolver.js';
import profileResolver from './resolvers/profile.resolver.js';
import { graphql, validate, parse } from 'graphql';
import depthLimit from 'graphql-depth-limit'

const queryDepthLimit = [depthLimit(5)];

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

      const validationResult = validate(rootSchema, parse(query), queryDepthLimit);
      if (validationResult != undefined && validationResult.length > 0) {
        return { errors: validationResult };
      }

      const result = await graphql({
        schema: rootSchema,
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

      return { data: result.data };
    },
  });
};

export default plugin;
