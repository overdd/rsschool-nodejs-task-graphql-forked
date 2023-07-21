import { Id, Prisma, NoArgument } from "../types/common.js";

const getUser = async ({ id }: Id, { prisma }: Prisma ) => {
  return await prisma.user.findUnique({ where: { id } });
}

const getAllUsers = async (_ : NoArgument, { prisma }: Prisma) => {
  return await prisma.user.findMany();
}

export default {
  user: getUser,
  users: getAllUsers,
};