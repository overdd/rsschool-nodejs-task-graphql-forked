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

const deleteProfile = async ({ id }: Id, { prisma }: Prisma) => {
    try {
      await prisma.profile.delete({ where: { id } });
      return id;
    } catch (error) {
      console.log(`Not able to delete profile id = ${id}`);
    }
};

const changeProfile = async ({ id, dto: data}: Id & { dto: Partial<ProfileInput> }, { prisma }: Prisma) => {
  try {
    const profile = await prisma.profile.update({ where: { id }, data });
    return profile;
  } catch (error) {
    console.log(`Not able to change profile id = ${id}`);
  }
};

export default {
  profile: getProfile,
  profiles: getAllProfiles,
  createProfile: createProfile,
  deleteProfile: deleteProfile,
  changeProfile: changeProfile
};