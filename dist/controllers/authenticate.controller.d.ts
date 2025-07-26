import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import z from "zod";
declare const authenticateBodySchema: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
type AuthenticateBodySchema = z.infer<typeof authenticateBodySchema>;
export declare class AuthenticateController {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    handle(body: AuthenticateBodySchema): Promise<{
        access_token: string;
    }>;
}
export {};
