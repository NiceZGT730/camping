import { createClient } from "@supabase/supabase-js";

const bucket = "landmark-bucket";
const url = process.env.SUPABASE_URL!;
const key = process.env.SUPABASE_KEY!;

// Create Supabase client
const supabase = createClient(url, key);

// Upload file using standard upload
export async function uploadFile(image: File) {
  const timestamp = Date.now();
  const fileName = `${timestamp}-${image.name}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(fileName, image);

  if (!data) throw new Error("Upload Failed!!!");

  // const { data } = supabase.storage.from("bucket").getPublicUrl("filePath.jpg");
  // console.log(data.publicUrl);

  return supabase.storage.from(bucket).getPublicUrl(fileName).data.publicUrl;
}
