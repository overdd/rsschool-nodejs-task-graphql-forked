import { Id, Prisma, NoArgument } from "../types/common.js";

const getPost = async ({ id }: Id, { prisma }: Prisma ) => {
  return await prisma.post.findUnique({ where: { id } });
}

const getAllPosts = async (_ : NoArgument, { prisma }: Prisma) => {
  return await prisma.post.findMany();
}

export default {
  post: getPost,
  posts: getAllPosts,
};