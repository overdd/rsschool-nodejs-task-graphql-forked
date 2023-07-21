import { Id, Prisma, NoArgument } from "../types/common.js";

const getMember = async ({ id }: Id, { prisma }: Prisma ) => {
  return await prisma.memberType.findUnique({ where: { id } });
}

const getAllMembers = async (_ : NoArgument, { prisma }: Prisma) => {
  return await prisma.memberType.findMany();
}

export default {
  memberType: getMember,
  memberTypes: getAllMembers,
};