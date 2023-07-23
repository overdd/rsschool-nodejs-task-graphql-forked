import { Id, Prisma, NoArgument, PostInput } from "../types/common.js";

const getPost = async ({ id }: Id, { prisma }: Prisma ) => {
  return await prisma.post.findUnique({ where: { id } });
}

const getAllPosts = async (_ : NoArgument, { prisma }: Prisma) => {
  return await prisma.post.findMany();
}

const createPost = async ({ dto: data }: { dto: PostInput }, { prisma }: Prisma) => {
  return await prisma.post.create({ data });
};

export default {
  post: getPost,
  posts: getAllPosts,
  createPost: createPost
};