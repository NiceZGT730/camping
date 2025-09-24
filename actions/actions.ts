"use server";
import { profileSchema, ValidateWithZod } from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";
import { redirect } from "next/navigation";

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("User Must Login!!!");
  }
  if (!user.privateMetadata.hasProfile) redirect("/profile/create");
  return user;
};

const renderError = (error: unknown): { message: string } => {
  //code body
  return {
    message: error instanceof Error ? error.message : "An Error!!!",
  };
};

// export const createProfileAction = async (
//   prevState: any,
//   formData: FormData
// ) => {
//   try {
//     const user = await currentUser();
//     if (!user) throw new Error("User Must Login!!!");
//     const rawData = Object.fromEntries(formData);
//     const ValidateField = ValidateWithZod(profileSchema, rawData);
//     await db.profile.create({
//       data: {
//         clerkId: user.id,
//         email: user.emailAddresses[0]?.emailAddress,
//         profileImage: user.imageUrl ?? "",
//         ...ValidateField,
//       },
//     });

//     const clerk = await clerkClient();

//     await clerk.users.updateUserMetadata(user.id, {
//       privateMetadata: {
//         hasProfile: true,
//       },
//     });
//     redirect("/profile");
//     // return { message: "Profile created successfully!" };
//   } catch (error) {
//     // console.log(error);
//     return renderError(error);
//   }
// };

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Please Login!!!");

    const rawData = Object.fromEntries(formData);
    const validateField = ValidateWithZod(profileSchema, rawData);
    // console.log("validated", validateField);

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        ...validateField,
      },
    });
    const client = await clerkClient();
    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
    // return { message: "Create Profile Success!!!" };
  } catch (error) {
    // console.log(error);
    return renderError(error);
  }
  redirect("/");
};

export const createLandmarkAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Please Login!!!");

    const rawData = Object.fromEntries(formData);
    // const validateField = ValidateWithZod(profileSchema, rawData);
    console.log("validated", rawData);

    return { message: "Create Landmark Success!!!" };
  } catch (error) {
    // console.log(error);
    return renderError(error);
  }
  // redirect("/");
};
