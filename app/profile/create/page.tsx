import FormInput from "@/components/form/formInput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createProfileAction } from "@/actions/actions";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

const CreatePage = async () => {
  const user = await currentUser();
  if (user?.privateMetadata.hasProfile) redirect("/");
  return (
    <section className="flex flex-col items-center  min-h-screen px-2">
      <h1 className="text-2xl font-bold mb-6 capitalize">Create User</h1>
      <FormContainer action={createProfileAction}>
        <div className="flex flex-col gap-4 items-stretch w-full max-w-xs">
          <FormInput name="username" label="Username" type="text" />
          <FormInput name="firstName" label="firstName" type="text" />
          <FormInput name="lastName" label="lastName" type="text" />

          <SubmitButton text="Create" size="sm" className="w-full" />
        </div>
      </FormContainer>
    </section>
  );
};
export default CreatePage;
