import FormInput from "@/components/form/formInput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createLandmarkAction } from "@/actions/actions";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import CategoryInput from "@/components/form/CategoryInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import ProvinceInput from "@/components/form/ProvinceInput";
import MapLandmark from "@/components/map/MapLandmarkDynamic";
import ImageInput from "@/components/form/ImageInput";


const CreatePage = () => {
  return (
    <section className="flex flex-col min-h-screen px-4">
      <h1 className="text-2xl font-bold mb-6 capitalize">Create Landmark</h1>
      <FormContainer action={createLandmarkAction}>
        <div className="flex flex-col gap-4 items-stretch w-full max-w-2xl mx-auto">
          <FormInput
            name="name"
            label="LandMark Name"
            placeholder="Landmark Name"
            type="text"
          />

          {/* Category */}
          <CategoryInput />

          {/* Text Area */}
          <TextAreaInput name="description" LabelText="Description" />

          <div className="grid grid-cols-2 gap-4">
            <FormInput
              name="price"
              label=" Price"
              placeholder="Price"
              type="number"
            />
            <ProvinceInput />
          </div>
          <ImageInput />

          <MapLandmark location={{ lat: 14, lng: 100.5 }} />

          <SubmitButton text="Create Landmark" size="sm" className="mx-auto" />
        </div>
      </FormContainer>
    </section>
  );
};
export default CreatePage;
