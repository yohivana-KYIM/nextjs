import { prisma } from "@/common/prisma";

import * as trpc from "@trpc/server"
import * as trpcNext from "@trpc/server/adapters/next"

// function for create context
export async function createContext (ctx: trpcNext.CreateNextContextOptions) {

    const { res, req } = ctx;

    return {
        res,
        req,
        prisma
    }
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;