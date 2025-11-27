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

export const landmarkSchema = z.object({
  name: z.string().min(2, {message: "Name must be at least 2 characters long"}).max(30, {message: "Name must be at most 30 characters long"}),
  description: z.string().min(2, {message: "Description must be at least 2 characters long"}).max(500, {message: "Description must be at most 500 characters long"}),
  category: z.string(),
  price: z.coerce.number().min(1, {message: "Price must be at least 1"}),
  province: z.string(),
  lat: z.coerce.number(),
  lng: z.coerce.number(), 
  

})

const validateImage = () => {
  const maxFileSize = 5 * 1024 * 1024; // 5MB
  return z.instanceof(File).refine((file) => file.size <= maxFileSize, {
    message: "File size must be less than 5MB",
  });
};

export const imageSchema = z.object({
  image: validateImage(),
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
