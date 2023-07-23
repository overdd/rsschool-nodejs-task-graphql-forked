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

const deletePost = async ({ id }: Id, { prisma }: Prisma) => {
    try {
      await prisma.post.delete({ where: { id } });
      return id;
    } catch (error) {
      console.log(`Not able to delete post id = ${id}`);
    }
};

const changePost = async ({ id, dto: data}: Id & { dto: Partial<PostInput> }, { prisma }: Prisma) => {
  try {
    const post = await prisma.post.update({ where: { id }, data });
    return post;
  } catch (error) {
    console.log(`Not able to change post id = ${id}`);
  }
};

export default {
  post: getPost,
  posts: getAllPosts,
  createPost: createPost,
  deletePost: deletePost,
  changePost: changePost
};