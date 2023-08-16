import * as z from "zod";


// schema for the register user
export const RegisterSchema = z.object({
    firstname: z.string(),
    email: z.string().email(),
    type: z.enum(['faithful', 'prayer_group', 'parish', 'diocese', 'Seat', 'admin']),
    password: z.string().min(4).max(12),
    parish_official: z.boolean().default(false),
  
});

//login schema

export const LoginSchema = z.object({
    email: z.string(),
    password: z.string().min(4).max(12),
});


export type IRegister = z.infer<typeof RegisterSchema>;
export type ILogin = z.infer<typeof LoginSchema>;
