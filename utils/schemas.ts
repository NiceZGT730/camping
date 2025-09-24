import * as z from "zod";

// const profileSchema = z
//   .string()
//   .min(2, { message: "Name must be at least 2 characters long" })
//   .max(50, { message: "Name must be at most 50 characters long" });

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Firstname must be at least 2 characters long" }),
  lastName: z
    .string()
    .min(2, { message: "Lastname must be at least 2 characters long" }),
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters long" }),
});

export const ValidateWithZod = <T>(schema: z.ZodType<T>, data: unknown): T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errorMessages = result.error.issues
      .map((issue) => issue.message)
      .join(", ");

    throw new Error(errorMessages);
  }
  return result.data;
};
