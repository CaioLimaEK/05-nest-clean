"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configServices = app.get(config_1.ConfigService);
    const port = configServices.get("PORT", { infer: true });
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map