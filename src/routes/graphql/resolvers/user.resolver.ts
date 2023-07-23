import { Id, Prisma, NoArgument, UserInput } from "../types/common.js";

const getUser = async ({ id }: Id, { prisma }: Prisma ) => {
  return await prisma.user.findUnique({ where: { id } });
}

const getAllUsers = async (_ : NoArgument, { prisma }: Prisma) => {
  return await prisma.user.findMany();
}

const createUser = async ({ dto: data }: { dto: UserInput }, { prisma }: Prisma) => {
  return await prisma.user.create({ data });
};

export default {
  user: getUser,
  users: getAllUsers,
  createUser: createUser
};