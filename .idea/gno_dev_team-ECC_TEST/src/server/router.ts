import * as trpc from "@trpc/server";

import { hash } from "argon2";
import { Context } from "./context";

import { RegisterSchema } from "../common/validation/auth";

export const serverRouter = trpc.router<Context>().mutation("register", {
 
    input: RegisterSchema,

    resolve: async ({ input, ctx }) => {
        const { firstname, email, type, password, parish_official } = input; 

        const userExist = await ctx.prisma.user.findFirst({
            where: { email },
        }); // find user by email

        if (userExist) {
            throw new trpc.TRPCError({
                code: "CONFLICT",
                message: "User already exist !",
            });
        }

        const hashedPassword = await hash(password);// hash password

        //create new user
        const result = ctx.prisma.user.create({
            data: { firstname, email, type, hashedPassword, parish_official, },
        });

        
        return {
            code: 201,
            message: "Account created successfully",
            success: result,
        };
    }
});


export type serverRouter = typeof serverRouter;

