import z from "zod";
export declare const envSchema: z.ZodObject<{
    DATABASE_URL: z.ZodURL;
    PORT: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export type Env = z.infer<typeof envSchema>;
