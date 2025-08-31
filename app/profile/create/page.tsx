import { Button } from "@/components/ui/button";
import FormInput from "@/components/form/formInput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";

const createProfileAction = async (prevState: any, formData: FormData) => {
  "use server";
  const Name = formData.get("name")?.toString();
  console.log(Name);
  return { message: "Profile created successfully!" };
};

const CreatePage = () => {
  return (
    <section className="flex flex-col items-center  min-h-screen px-2">
      <h1 className="text-2xl font-bold mb-6 capitalize">Create User</h1>
      <FormContainer action={createProfileAction}>
        <div className="flex flex-col gap-4 items-stretch w-full max-w-xs">
          <FormInput name="name" label="Firstname" type="text" />
          <FormInput name="email" label="Email" type="email" />
          <SubmitButton text="Create" size="sm" className="w-full" />
        </div>
      </FormContainer>
    </section>
  );
};
export default CreatePage;
