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

const deleteUser = async ({ id }: Id, { prisma }: Prisma) => {
    try {
      await prisma.user.delete({ where: { id } });
      return id;
    } catch (error) {
      console.log(`Not able to delete user id = ${id}`);
    }
};

const changeUser = async ({ id, dto: data}: Id & { dto: Partial<UserInput> }, { prisma }: Prisma) => {
  try {
    const user = await prisma.user.update({ where: { id }, data });
    return user;
  } catch (error) {
    console.log(`Not able to change user id = ${id}`);
  }
};

export default {
  user: getUser,
  users: getAllUsers,
  createUser: createUser,
  deleteUser: deleteUser,
  changeUser: changeUser
};