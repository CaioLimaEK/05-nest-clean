import { PipeTransform, BadRequestException } from "@nestjs/common";
import z, { ZodError, ZodSchema } from "zod";
import { fromZodError } from "zod-validation-error";

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown) {
    try {
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (error) {
      if (error instanceof ZodError) {
        throw new BadRequestException({
          errors: z.treeifyError(error),
          message: "Validation falied",
          statusCode: 400,
          error: fromZodError(error),
        });
      }
      throw new BadRequestException("Validation failed");
    }
  }
}
