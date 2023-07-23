import { Id, Prisma, NoArgument, ProfileInput } from "../types/common.js";

const getProfile = async ({ id }: Id, { prisma }: Prisma ) => {
  return await prisma.profile.findUnique({ where: { id } });
}

const getAllProfiles = async (_ : NoArgument, { prisma }: Prisma) => {
  return await prisma.profile.findMany();
}

const createProfile = async ({ dto: data }: { dto: ProfileInput }, { prisma }: Prisma) => {
    return await prisma.profile.create({ data });
};

export default {
  profile: getProfile,
  profiles: getAllProfiles,
  createProfile: createProfile
};