"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envSchema = void 0;
const zod_1 = require("zod");
exports.envSchema = zod_1.default.object({
    DATABASE_URL: zod_1.default.url(),
    JWT_PRIVATE_KEY: zod_1.default.string(),
    JWT_PUBLIC_KEY: zod_1.default.string(),
    PORT: zod_1.default.coerce.number().optional().default(3333),
});
//# sourceMappingURL=env.js.map