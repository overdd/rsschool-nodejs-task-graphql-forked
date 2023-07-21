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