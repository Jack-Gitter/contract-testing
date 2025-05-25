"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const nest_openapi_tools_1 = require("nest-openapi-tools");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Contract Testing')
        .setDescription('Contract Testing Application')
        .setVersion('1.0')
        .addTag('homes');
    await nest_openapi_tools_1.OpenApiNestFactory.configure(app, config, {
        webServerOptions: { enabled: true, path: 'api-docs' },
        fileGeneratorOptions: { enabled: true, outputFilePath: './openapi.json' },
    });
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map