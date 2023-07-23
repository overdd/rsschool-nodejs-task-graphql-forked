import { PrismaClient } from "@prisma/client";

export type Id = {
    id: string
}

export type Prisma = {
    prisma: PrismaClient;
}

export type NoArgument = {
    undefined: undefined
}

export type UserInput = {
    name: string;
    balance: number;
};

export type ProfileInput = {
    isMale: boolean;
    yearOfBirth: number;
    memberTypeId: string;
    userId: string;
};

export type PostInput = {
    title: string;
    content: string;
    authorId: string;
};
  
  