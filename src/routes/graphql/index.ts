import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { createGqlResponseSchema, gqlResponseSchema, schema } from './schemas.js';
import {  graphql } from 'graphql';

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {


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
        variableValues: variables,
      });

      if (result.errors) {
        return reply.code(400).send({ errors: result.errors });
      }


      return { data: result.data };
    },
  });
};

export default plugin;
