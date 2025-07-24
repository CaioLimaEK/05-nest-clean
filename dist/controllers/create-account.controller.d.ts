import { PrismaService } from "src/prisma/prisma.service";
import { z } from "zod";
declare const createAccountBodySchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
type CreateAccountBodySchema = z.infer<typeof createAccountBodySchema>;
export declare class CreateAccountController {
    private prisma;
    constructor(prisma: PrismaService);
    handle(body: CreateAccountBodySchema): Promise<void>;
}
export {};
