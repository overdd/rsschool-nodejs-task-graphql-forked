import { Id, Prisma, NoArgument } from "../types/common.js";

const getProfile = async ({ id }: Id, { prisma }: Prisma ) => {
  return await prisma.profile.findUnique({ where: { id } });
}

const getAllProfiles = async (_ : NoArgument, { prisma }: Prisma) => {
  return await prisma.profile.findMany();
}

export default {
  profile: getProfile,
  profiles: getAllProfiles,
};